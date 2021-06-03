import {connect} from "../database.utils";
import {ProfilePlant} from "../interfaces/ProfilePlant";

export async function insertProfilePlant(profilePlant: ProfilePlant) {
    try {
        const mysqlConnection = await connect();
        const query : string = "INSERT INTO profilePlant(profilePlantId, profilePlantPlantId, profilePlantProfileId, profilePlantNotes) VALUES (UUID_TO_BIN(:profilePlantId), UUID_TO_BIN(:profilePlantPlantId), UUID_TO_BIN(:profilePlantProfileId), :profilePlantNotes)";

        const [rows] = await mysqlConnection.execute(query, profilePlant);

        // @ts-ignore is required so that rows can be interacted with like the array it is
        return rows[0]
    } catch (e) {
        console.error(e)
        return null
    }
}