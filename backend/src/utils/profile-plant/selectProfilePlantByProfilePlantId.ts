import {connect} from "../database.utils";
import {ProfilePlant} from "../interfaces/ProfilePlant";

export async function selectProfilePlantByProfilePlantId(profilePlantId: string) {
    try {
        const mysqlConnection = await connect();
        const query : string = "SELECT BIN_TO_UUID(profilePlantId) AS profilePlantId, BIN_TO_UUID(profilePlantPlantId) AS profilePlantPlantId, BIN_TO_UUID(profilePlantProfileId) AS profilePlantProfileId, profilePlantNotes FROM profilePlant WHERE profilePlantId = UUID_TO_BIN(:profilePlantId);"

        const [rows] = await mysqlConnection.execute(query, {profilePlantId});
        // @ts-ignore is required so that rows can be interacted with like the array it is
        return rows[0]
    } catch (e) {
        console.error(e)
        return null
    }
}