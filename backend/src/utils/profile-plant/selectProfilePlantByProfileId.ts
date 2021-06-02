import {connect} from "../database.utils";
import {ProfilePlant} from "../interfaces/ProfilePlant";

export async function selectProfilePlantByProfileId(profilePlant: ProfilePlant) {
    try {
        const mysqlConnection = await connect();
        const query : string = 'SELECT profilePlantId, profilePlantPlantId, profilePlantProfileId, profilePlantNotes FROM profilePlant WHERE profilePlantProfileId = UUID_TO_BIN(:profilePlantProfileId);'

        const [rows] = await mysqlConnection.execute(query, profilePlant);
        return 'Plant retrieved'
    } catch (e) {
        console.error(e)
        return null
    }
}