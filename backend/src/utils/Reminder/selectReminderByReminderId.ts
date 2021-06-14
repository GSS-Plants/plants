import {connect} from "../database.utils";
import {Reminder} from "../interfaces/Reminder";

export async function selectReminderByReminderId(reminderId: string) {
    try {
        console.log('selectReminderByReminderId: ', reminderId)
        const mysqlConnection = await connect();
        const query : string = "SELECT BIN_TO_UUID(reminderId) AS reminderId, BIN_TO_UUID(reminderProfilePlantId) AS reminderProfilePlantId, reminderDescription, reminderRecurrence, DATE_FORMAT(reminderStartDate, '%Y-%m-%e') AS reminderStartDate FROM reminder WHERE reminderId = UUID_TO_BIN(:reminderId)";
        const [rows] = await mysqlConnection.execute(query, {reminderId});
        //@ts-ignore
        return rows[0]
    } catch (e) {
        console.error(e)
        return null
    }
}