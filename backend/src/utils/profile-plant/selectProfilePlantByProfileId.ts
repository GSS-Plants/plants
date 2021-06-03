import {connect} from "../database.utils";
import {ProfilePlant} from "../interfaces/ProfilePlant";

export async function selectProfilePlantByProfileId(profileId: string) {
    try {
        const mysqlConnection = await connect();
        const query : string = 'SELECT profilePlantId, profilePlantPlantId, profilePlantProfileId, profilePlantNotes FROM profilePlant WHERE profilePlantProfileId = UUID_TO_BIN(:profileId);'

        const [rows] = await mysqlConnection.execute(query, profileId);

        // @ts-ignore is required so that rows can be interacted with like the array it is
        return rows.length !== 0 ? {...rows} : undefined;
    } catch (e) {
        console.error(e)
        return null
    }
}