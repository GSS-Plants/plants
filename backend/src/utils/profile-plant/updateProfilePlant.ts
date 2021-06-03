import {connect} from "../database.utils";
import {ProfilePlant} from "../interfaces/ProfilePlant";

export async function updateProfilePlant(profilePlant: ProfilePlant) {
    try {
        const mysqlConnection = await connect();
        const query : string = 'UPDATE profilePlant SET profilePlantNotes = :profilePlantNotes WHERE profilePlantId = UUID_TO_BIN(:profilePlantId)'

        const [rows] = await mysqlConnection.execute(query, profilePlant);

        // @ts-ignore is required so that rows can be interacted with like the array it is
        return rows[0]
    } catch (e) {
        console.error(e)
        return null
    }
}