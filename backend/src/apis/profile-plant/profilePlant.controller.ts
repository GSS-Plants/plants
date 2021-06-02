import {Request, Response} from "express";
import {ProfilePlant} from "../../utils/interfaces/ProfilePlant";
import {Status} from "../../utils/interfaces/Status";
import {deleteProfilePlant} from "../../utils/profile-plant/deleteProfilePlant"
import {insertProfilePlant} from "../../utils/profile-plant/insertProfilePlant"
import {selectProfilePlantByProfileId} from "../../utils/profile-plant/selectProfilePlantByProfileId";
import {selectProfilePlantWithDetailsbyProfileId} from "../../utils/profile-plant/selectProfilePlantWithDetailsbyProfileId";
import {selectProfilePlantWithDetailsByProfilePlantId} from "../../utils/profile-plant/selectProfilePlantWithDetailsByProfilePlantId";
import {updateProfilePlant} from "../../utils/profile-plant/updateProfilePlant";

export async function putProfilePlantController(request: Request, response: Response) : Promise<Response> {
    try {

    } catch (error) {
        return response.json( {status:400, data: null, message: error.message})
    }
}