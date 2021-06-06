import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";

export async function deleteProfile(profileId: string) {
    try {
        const mysqlConnection = await connect();
        const query: string = 'DELETE FROM profile  WHERE profileId = UUID_TO_BIN(:profileId)'

        const [rows] = await mysqlConnection.execute(query, profileId);

        // @ts-ignore is required so that rows can be interacted with like the array it is
        return rows[0]
    } catch (e) {
        console.error(e)
        return null
    }
}