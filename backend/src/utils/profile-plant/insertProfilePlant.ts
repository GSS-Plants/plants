import {connect} from "../database.utils";
import {ProfilePlant} from "../interfaces/ProfilePlant";
import {response} from "express";
import {Status} from "../interfaces/Status";

export async function insertProfilePlant(profilePlant: ProfilePlant) {
    try {
        const mysqlConnection = await connect();
        const query: string = "INSERT INTO profilePlant(profilePlantId, profilePlantPlantId, profilePlantProfileId, profilePlantNotes) VALUES (UUID_TO_BIN(:profilePlantId), UUID_TO_BIN(:profilePlantPlantId), UUID_TO_BIN(:profilePlantProfileId), :profilePlantNotes)";

        const [rows] = await mysqlConnection.query(query, profilePlant);

        //@ts-ignore
        const status: Status = {status:200, data: rows[0], message:'successful insert'}
        return status
    } catch (e) {
        console.error(e)
        const status: Status = {status:400, data: null, message:e.message}

        return status
    }
}