import {connect} from "../database.utils";
import {Reminder} from "../interfaces/Reminder";

export async function selectReminderByReminderId(reminderId: string) {
    try {
        const mysqlConnection = await connect();
        const query : string = 'SELECT UUID_TO_BIN(reminderId) AS reminderId, UUID_TO_BIN(reminderProfilePlantId) AS reminderProfilePlantId, reminderDescription, reminderRecurrence, reminderStartDate FROM reminder WHERE reminderId = :reminderId';

        const [rows] = await mysqlConnection.execute(query, {reminderId});
        return rows
    } catch (e) {
        console.error(e)
        return null
    }
}