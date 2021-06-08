import {connect} from "../database.utils";
import {ProfilePlant} from "../interfaces/ProfilePlant";

export async function selectProfilePlantByProfilePlantId(profilePlantId: string) {
    try {
        const mysqlConnection = await connect();
        const query : string = 'SELECT profilePlantId, profilePlantPlantId, profilePlantProfileId, profilePlantNotes FROM profilePlant WHERE profilePlantId = UUID_TO_BIN(:profilePlantId);'

        const [rows] = await mysqlConnection.query(query, profilePlantId);
        // @ts-ignore
        console.log(rows[0])
        // @ts-ignore is required so that rows can be interacted with like the array it is
        return rows[0]
    } catch (e) {
        console.error(e)
        return null
    }
}