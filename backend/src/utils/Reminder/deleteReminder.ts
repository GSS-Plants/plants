import {connect} from "../database.utils";
import {Reminder} from "../interfaces/Reminder";

export async function deleteReminder(reminderId: string) {
    try {
        const mysqlConnection = await connect();
        const query : string = 'DELETE FROM reminder WHERE reminderId = UUID_TO_BIN(:reminderId)';

        const result = await mysqlConnection.execute(query, {reminderId});
        return 'Deleted ' + result + 'entries'
    } catch (e) {
        console.error(e)
        return null
    }
}