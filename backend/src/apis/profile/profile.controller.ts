import {Request, Response} from "express";
import {PartialProfile, Profile} from "../../utils/interfaces/Profile";
import {selectPartialProfileByProfileId} from "../../utils/profile/selectPartialProfileByProfileId";
import {Status} from "../../utils/interfaces/Status";
import {selectWholeProfileByProfileId} from "../../utils/profile/selectWholeProfileByProfileId";
import {updateProfile} from "../../utils/profile/updateProfile";
import {selectProfileByProfileEmail} from "../../utils/profile/selectProfileByProfileEmail";
import {selectProfileByProfileActivationToken} from "../../utils/profile/selectProfileByProfileActivationToken";
import {deleteProfile} from "../../utils/profile/deleteProfile";

export async function putProfileController(request: Request, response: Response) : Promise<Response>{
    try {
        const {profileId} = request.params
        const {profileEmail, profileLogin} = request.body
        const profile: Profile = <Profile>request.session?.profile
        const profileIdFromSession: string = profile.profileId as string

        const preformUpdate = async (partialProfile: PartialProfile) : Promise<Response> => {
            const previousProfile: Profile = await selectWholeProfileByProfileId(<string>partialProfile.profileId)
            const newProfile: Profile = {...previousProfile, ...partialProfile}
            await updateProfile(newProfile)
            return response.json({status: 200, data: null, message: "Profile successfully updated"})
        }

        const updateFailed = (message: string) : Response => {
            return response.json({status: 400, data: null, message})
        }

        return profileId === profileIdFromSession
            ? preformUpdate({profileId, profileEmail, profileLogin})
            : updateFailed("you are not allowed to preform this action")
    } catch (error) {
        return response.json( {status:400, data: null, message: error.message})
    }
}


export async function getProfileByProfileEmail(request: Request, response: Response) : Promise<Response> {
    try {
        const {profileEmail} = request.params;
        console.log (profileEmail)
        const mySqlResult = await selectProfileByProfileEmail(profileEmail);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error) {
        return(response.json({status: 400, data: null, message: error.message}))

    }

}

export async function getProfileByProfileId(request: Request, response: Response) : Promise<Response> {
    try {
        const {profileId} = request.params;
        console.log (profileId)
        const mySqlResult = await selectPartialProfileByProfileId(profileId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error) {
        return(response.json({status: 400, data: null, message: error.message}))

    }

}

export async function getProfileByProfileActivationToken(request: Request, response: Response) : Promise<Response> {
    try {
        const {profileActivationToken} = request.params;
        console.log (profileActivationToken)
        const mySqlResult = await selectProfileByProfileActivationToken(profileActivationToken);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error) {
        return(response.json({status: 400, data: null, message: error.message}))

    }

}

export async function deleteProfileController(request: Request, response: Response): Promise<Response> {
    try {
        const {profileId} = request.params;
        const result = await deleteProfile(profileId);

        const data = result ?? null;
        const status: Status = {status: 200, data, message: 'profile deleted successfully'}
        return response.json(status)
    }catch (error) {
        return (response.json({status: 400, data: null, message: error.message}))
    }
}