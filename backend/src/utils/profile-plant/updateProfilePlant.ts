import {connect} from "../database.utils";
import {ProfilePlant} from "../interfaces/ProfilePlant";

export async function updateProfilePlant(profilePlant: ProfilePlant) {
    try {
        const mysqlConnection = await connect();
        const query : string = 'UPDATE profilePlant SET profilePlantNotes = :profilePlantNotes WHERE profilePlantPlantId = UUID_TO_BIN(:profilePlantPlantId) AND profilePlantProfileId = UUID_TO_BIN(:profilePlantProfileId)'

        const [rows] = await mysqlConnection.execute(query, profilePlant);
        return 'Notes successfully updated'
    } catch (e) {
        console.error(e)
        return null
    }
}