import {Request, Response} from "express";
import {PartialProfilePlant, ProfilePlant} from "../../utils/interfaces/ProfilePlant";
import {Status} from "../../utils/interfaces/Status";
import {deleteProfilePlant} from "../../utils/profile-plant/deleteProfilePlant"
import {insertProfilePlant} from "../../utils/profile-plant/insertProfilePlant"
import {selectProfilePlantWithDetailsByProfileId} from "../../utils/profile-plant/selectProfilePlantWithDetailsByProfileId";
import {selectProfilePlantWithDetailsByProfilePlantId} from "../../utils/profile-plant/selectProfilePlantWithDetailsByProfilePlantId";
import {updateProfilePlant} from "../../utils/profile-plant/updateProfilePlant";
import {selectProfilePlantByProfilePlantId} from "../../utils/profile-plant/selectProfilePlantByProfilePlantId";
import uuid from "uuid";
import {Profile} from "../../utils/interfaces/Profile";

function getSessionId(request: Request): string {
    try {
        let profile: Profile = <Profile>request.session?.profile
        return profile.profileId as string
    } catch (e) {
        return e
    }
}

//for testing outputs
export async function testController(request: Request, response: Response): Promise<Response> {
    try {
        let profilePlantProfileId: string = getSessionId(request)

        return response.json({status: 200, data: null, message: 'Session profile Id: ' + profilePlantProfileId})
    } catch (e) {
        return response.json({status: 400, data: null, message: e.message})

    }
}

// Create a new profilePlant
export async function postProfilePlantController(request: Request, response: Response): Promise<Response> {
    try {
        const profilePlantProfileId: string = getSessionId(request)
        const {profilePlantPlantId, profilePlantNotes} = request.body

        const newProfilePlant: ProfilePlant = {
            profilePlantId: uuid(),
            profilePlantPlantId,
            profilePlantProfileId,
            profilePlantNotes
        }

        const post = async (newProfilePlant: ProfilePlant): Promise<Response> => {
            const data = await insertProfilePlant(newProfilePlant)
            return response.json(data)
        }

        return post(newProfilePlant);

    } catch (error) {
        return response.json({status: 400, data: null, message: error.message})
    }
}

// Update one profilePlant
export async function putProfilePlantController(request: Request, response: Response): Promise<Response> {
    try {
        // This probably is right.
        const {profilePlantId} = request.params
        const {profilePlantNotes} = request.body
        const profile: Profile = <Profile>request.session?.profile
        const profileIdFromSession: string = profile.profileId as string

        const performUpdate = async (partialProfilePlant: PartialProfilePlant): Promise<Response> => {
            const previousProfilePlant: ProfilePlant = await selectProfilePlantByProfilePlantId(partialProfilePlant.profilePlantId)
            const newProfilePlant: ProfilePlant = {...previousProfilePlant, ...partialProfilePlant}
            await updateProfilePlant(newProfilePlant)
            return response.json({status: 200, data: null, message: "Notes successfully updated"})
        }

        const updateFailed = (message: string): Response => {
            return response.json({status: 400, data: null, message})
        }

        /*Do we need to check the profile Id?*/
        // return profilePlantProfileId === profileIdFromSession?
        return performUpdate({profilePlantId, profilePlantNotes})
        // : updateFailed("You are not allowed to perform this action.")
    } catch (error) {
        return response.json({status: 400, data: null, message: error.message})
    }
}

// Get one profilePlant by its Id
export async function getProfilePlantByProfilePlantIdController(request: Request, response: Response): Promise<Response> {
    try {
        const {profilePlantId} = request.params;
        const {profileId} = request.params;
        const profile: Profile = <Profile>request.session?.profile
        const profileIdFromSession: string = profile.profileId as string
        const result = await selectProfilePlantByProfilePlantId(profilePlantId);
        const data = result ?? null;
        const status: Status = {status: 200, data, message: null}

        const updateFailed = (message: string): Response => {
            return response.json({status: 400, data: null, message})
        }

        return profileId === profileIdFromSession ? response.json(status) : updateFailed("you are not authorized to perform this action")

    } catch (error) {
        return (response.json({status: 400, data: null, message: error.message}))
    }
}

// Get one profilePlant with Plant fields
export async function getProfilePlantWithDetailsByProfilePlantIdController(request: Request, response: Response): Promise<Response> {
    try {
        const {profilePlantId} = request.params;
        const result = await selectProfilePlantWithDetailsByProfilePlantId(profilePlantId);
        const data = result ?? null;
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error) {
        return (response.json({status: 400, data: null, message: error.message}))
    }
}

// Get all profilePlants with Plant fields for one (user) profile.
export async function getProfilePlantWithDetailsByProfileIdController(request: Request, response: Response): Promise<Response> {
    try {
        const {profileId} = request.params;
        const result = await selectProfilePlantWithDetailsByProfileId(profileId);
        const data = result ?? null;
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error) {
        return (response.json({status: 400, data: null, message: error.message}))
    }
}

export async function deleteProfilePlantController(request: Request, response: Response): Promise<Response> {
    try {
        const {profilePlantId} = request.params;
        const result = await deleteProfilePlant(profilePlantId);
        const data = result ?? null;
        const status: Status = {status: 200, data, message: 'plant deleted successfully'}
        return response.json(status)
    } catch (error) {
        return (response.json({status: 400, data: null, message: error.message}))
    }
}