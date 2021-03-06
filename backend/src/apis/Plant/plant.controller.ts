import {Request, Response} from "express";
import {PartialProfile, Profile} from "../../utils/interfaces/Profile";
import {selectPartialProfileByProfileId} from "../../utils/profile/selectPartialProfileByProfileId";
import {Status} from "../../utils/interfaces/Status";
import {selectWholeProfileByProfileId} from "../../utils/profile/selectWholeProfileByProfileId";
import {updateProfile} from "../../utils/profile/updateProfile";
import {selectAllPlants} from "../../utils/plant/selectAllPlants";
import {selectPlantByCommonName} from "../../utils/plant/selectPlantByCommonName";
import {selectPlantByScientificName} from "../../utils/plant/selectPlantByScientificName";
import {selectPlantByPlantId} from "../../utils/plant/selectPlantByPlantId";

export async function getPlantByPlantId(request: Request, response: Response) : Promise<Response> {
    try {
        const {plantId} = request.params
        const mySqlResult = await selectPlantByPlantId(plantId);
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

export async function getByScientificName(request: Request, response: Response) : Promise<Response> {
    try {
        const {text} = request.params
        const mySqlResult = await selectPlantByScientificName(text);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error) {
        return(response.json({status: 400, data: null, message: error.message}))

    }

}