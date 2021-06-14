import {connect} from "../database.utils";
import {Reminder, UpdateReminder} from "../interfaces/Reminder";

export async function updateReminder(newReminder: Reminder) {
    try {
        const mysqlConnection = await connect();
        const query : string = 'UPDATE reminder SET reminderDescription = :reminderDescription, reminderRecurrence = :reminderRecurrence, reminderStartDate = :reminderStartDate WHERE reminderId = UUID_TO_BIN(:reminderId)';

        const [rows] = await mysqlConnection.execute(query, newReminder);

        // @ts-ignore is required so that rows can be interacted with like the array it is
        return rows[0]
    } catch (e) {
        console.error(e)
        return null
    }
}