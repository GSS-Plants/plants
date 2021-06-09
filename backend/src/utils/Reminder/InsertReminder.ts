import {connect} from "../database.utils";
import {Reminder} from "../interfaces/Reminder";

export async function insertReminder(reminder: Reminder) {
    try {
        const mysqlConnection = await connect();
        const query : string = 'INSERT INTO reminder (reminderId, reminderProfilePlantId, reminderDescription, reminderRecurrence, reminderStartDate) VALUES (UUID_TO_BIN(UUID()) , :reminderProfilePlantId, :reminderDescription, :reminderRecurrence, :reminderStartDate)';

        const [rows] = await mysqlConnection.execute(query, {reminder});
        return 'Reminder Successfully Created'
    } catch (e) {
        console.error(e)
        return null
    }
}