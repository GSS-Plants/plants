import {connect} from "../database.utils";
import {ProfilePlant} from "../interfaces/ProfilePlant";

export async function insertProfilePlant(profilePlant: ProfilePlant) {
    try {
        const mysqlConnection = await connect();
        const query : string = 'INSERT INTO profilePlant(profilePlantPlantId, profilePlantProfileId, profilePlantNotes) VALUES (UUID_TO_BIN(UUID()), UUID_TO_BIN(UUID()), :profilePlantNotes)';

        const [rows] = await mysqlConnection.execute(query, profilePlant);
        return 'Plant Successfully Added'
    } catch (e) {
        console.error(e)
        return null
    }
}