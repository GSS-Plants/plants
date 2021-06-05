import {Request, Response} from "express";
import {PartialProfilePlant, ProfilePlant} from "../../utils/interfaces/ProfilePlant";
import {Status} from "../../utils/interfaces/Status";
import {deleteProfilePlant} from "../../utils/profile-plant/deleteProfilePlant"
import {insertProfilePlant} from "../../utils/profile-plant/insertProfilePlant"
import {selectProfilePlantByProfileId} from "../../utils/profile-plant/selectProfilePlantByProfileId";
import {selectProfilePlantWithDetailsByProfileId} from "../../utils/profile-plant/selectProfilePlantWithDetailsByProfileId";
import {selectProfilePlantWithDetailsByProfilePlantId} from "../../utils/profile-plant/selectProfilePlantWithDetailsByProfilePlantId";
import {updateProfilePlant} from "../../utils/profile-plant/updateProfilePlant";
import {selectProfilePlantByProfilePlantId} from "../../utils/profile-plant/selectProfilePlantByProfilePlantId";
import uuid from "uuid";

// Create a new profilePlant
export async function postProfilePlantController(request: Request, response: Response): Promise<Response> {
    try {
        const profilePlantProfileId: string = <string>request.session?.profile.profileId
        const {profilePlantPlantId} = request.params
        const {profilePlantNotes} = request.body

        const newProfilePlant: ProfilePlant = {
            profilePlantId: null,
            profilePlantPlantId,
            profilePlantProfileId,
            profilePlantNotes
        }

        const post = async (newProfilePlant: ProfilePlant): Promise<Response> => {
            await insertProfilePlant(newProfilePlant)
            return response.json({status: 200, data: null, message: "Plant successfully added to Greenhouse"})
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
        const profileIdFromSession: string = <string>request.session?.profile.profileId

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
        const profileIdFromSession: string = <string>request.session?.profile.profileId
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
    }catch (error) {
        return (response.json({status: 400, data: null, message: error.message}))
    }
}