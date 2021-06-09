import {connect} from "../database.utils";
import {ProfilePlant} from "../interfaces/ProfilePlant";

export async function deleteProfilePlant(profilePlantId: string) {
    try {
        const mysqlConnection = await connect();
        const query: string = 'DELETE  FROM profilePlant  WHERE profilePlantId = UUID_TO_BIN(:profilePlantId)'

        await mysqlConnection.execute(query, {profilePlantId});

        // @ts-ignore is required so that rows can be interacted with like the array it is
        return 'profilePlantId ' + profilePlantId + 'has been deleted'
    } catch (e) {
        console.error(e)
        return null
    }
}