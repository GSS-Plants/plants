import {connect} from "../database.utils";
import {ProfilePlant} from "../interfaces/ProfilePlant";

export async function deleteProfilePlant(profilePlant: ProfilePlant) {
    try {
        const mysqlConnection = await connect();
        const query: string = 'DELETE  FROM profilePlant  WHERE profilePlantId = UUID_TO_BIN(:profilePlantId)'

        // @ts-ignore is required so that rows can be interacted with like the array it is
        const [rows] = await mysqlConnection.execute(query, profilePlant);
        return 'Plant deleted'
    } catch (e) {
        console.error(e)
        return null
    }
}