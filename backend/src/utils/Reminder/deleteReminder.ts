import {connect} from "../database.utils";
import {Reminder} from "../interfaces/Reminder";

export async function deleteReminder(reminderId: string) {
    try {
        const mysqlConnection = await connect();
        const query : string = 'DELETE FROM reminder WHERE reminderId = :reminderId';

        const [rows] = await mysqlConnection.execute(query, {reminderId});
        return 'Reminder deleted'
    } catch (e) {
        console.error(e)
        return null
    }
}