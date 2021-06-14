import {connect} from "../database.utils";
import {Reminder} from "../interfaces/Reminder";

export async function insertReminder(reminder: Reminder) {
    try {
        const mysqlConnection = await connect();
        console.log(reminder)
        const query : string = 'INSERT INTO reminder (reminderId, reminderProfilePlantId, reminderDescription, reminderRecurrence, reminderStartDate) VALUES (UUID_TO_BIN(:reminderId) , UUID_TO_BIN(:reminderProfilePlantId), :reminderDescription, :reminderRecurrence, :reminderStartDate)';

        const [rows] = await mysqlConnection.execute(query, reminder);
        return 'Reminder successfully created'
    } catch (e) {
        console.error(e)
        throw e
    }
}