import {connect} from "../database.utils";
import {ProfilePlant} from "../interfaces/ProfilePlant";

export async function deleteProfilePlant(profilePlant: ProfilePlant) {
    try {
        const mysqlConnection = await connect();
        const query: string = 'DELETE  FROM profilePlant  WHERE profilePlantProfileId = UUID_TO_BIN(:profilePlantProfileId) AND profilePlantPlantId = UUID_TO_BIN(:profilePlantPlantId)'

        const [rows] = await mysqlConnection.execute(query, profilePlant);
        return 'Plant retrieved'
    } catch (e) {
        console.error(e)
        return null
    }
}