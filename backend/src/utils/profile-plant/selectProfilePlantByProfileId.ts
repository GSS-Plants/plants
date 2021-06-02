import {connect} from "../database.utils";
import {ProfilePlant} from "../interfaces/ProfilePlant";

export async function selectProfilePlantByProfileId(profilePlant: ProfilePlant) {
    try {
        const mysqlConnection = await connect();
        const query : string = 'SELECT profilePlantId, profilePlantPlantId, profilePlantProfileId, profilePlantNotes FROM profilePlant WHERE profilePlantProfileId = UUID_TO_BIN(:profilePlantProfileId);'

        // @ts-ignore is required so that rows can be interacted with like the array it is
        const [rows] = await mysqlConnection.execute(query, profilePlant);
        return 'Plant retrieved'
    } catch (e) {
        console.error(e)
        return null
    }
}