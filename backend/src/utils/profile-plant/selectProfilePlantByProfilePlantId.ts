import {connect} from "../database.utils";
import {ProfilePlant} from "../interfaces/ProfilePlant";

export async function selectProfilePlantByProfilePlantId(profilePlantId: string) {
    try {
        const mysqlConnection = await connect();
        const query : string = 'SELECT profilePlantId, profilePlantPlantId, profilePlantProfileId, profilePlantNotes FROM profilePlant WHERE profilePlantId = UUID_TO_BIN(:profilePlantId);'

        const [rows] = await mysqlConnection.execute(query, profilePlantId);

        // @ts-ignore is required so that rows can be interacted with like the array it is
        return rows.length !== 0 ? {...rows[0]} : undefined;
    } catch (e) {
        console.error(e)
        return null
    }
}