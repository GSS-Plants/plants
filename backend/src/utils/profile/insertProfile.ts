import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";

export async function insertProfile(profile: Profile) {
    try {
        const mysqlConnection = await connect();
        const query : string = 'INSERT INTO profile(profileId, profileActivationToken, profileEmail, profileHash, profileLogin) VALUES (UUID_TO_BIN(UUID()) , :profileActivationToken, :profileEmail, :profileHash, :profileLogin)';

        const [rows] = await mysqlConnection.execute(query, profile);
        return 'Profile Successfully Created'
    } catch (e) {
        console.error(e)
        return null
    }
}