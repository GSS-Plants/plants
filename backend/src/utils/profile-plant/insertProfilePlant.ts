import {connect} from "../database.utils";
import {ProfilePlant} from "../interfaces/ProfilePlant";

export async function insertProfilePlant(profilePlantId: string, profileId: (string|null), plantId: string, notes: string) {
    try {
        const mysqlConnection = await connect();
        const query : string = "INSERT INTO profilePlant(profilePlantId, profilePlantPlantId, profilePlantProfileId, profilePlantNotes) VALUES (UUID_TO_BIN(:profilePlantId), UUID_TO_BIN(:plantId), UUID_TO_BIN(:profileId), :notes)";

        const [rows] = await mysqlConnection.execute(query, [profilePlantId, profileId, plantId, notes]);

        // @ts-ignore is required so that rows can be interacted with like the array it is
        return rows[0]
    } catch (e) {
        console.error(e)
        return null
    }
}