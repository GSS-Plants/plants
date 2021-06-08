import {Request, Response} from "express";
import {PartialProfile, Profile} from "../../utils/interfaces/Profile";
import {selectPartialProfileByProfileId} from "../../utils/profile/selectPartialProfileByProfileId";
import {Status} from "../../utils/interfaces/Status";
import {selectWholeProfileByProfileId} from "../../utils/profile/selectWholeProfileByProfileId";
import {updateProfile} from "../../utils/profile/updateProfile";
import {selectAllPlants} from "../../utils/plant/selectAllPlants";
import {selectPlantByCommonName} from "../../utils/plant/selectPlantByCommonName";
import {selectPlantByScientificName} from "../../utils/plant/selectPlantByScientificName";

export async function getAllPlants(request: Request, response: Response) : Promise<Response> {
    try {
        const mySqlResult = await selectAllPlants();
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error) {
        return(response.json({status: 400, data: null, message: error.message}))

    }

}

export async function getByCommonName(request: Request, response: Response) : Promise<Response> {
    try {
        const {text} = request.params
        console.log(text)
        const mySqlResult = await selectPlantByCommonName(text);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error) {
        return(response.json({status: 400, data: null, message: error.message}))

    }

}

export async function selectByScientificName(request: Request, response: Response) : Promise<Response> {
    try {
        const {search} = request.params
        const mySqlResult = await selectPlantByScientificName(search);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error) {
        return(response.json({status: 400, data: null, message: error.message}))

    }

}