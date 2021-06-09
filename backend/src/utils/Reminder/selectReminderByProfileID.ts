import {connect} from "../database.utils";


export async function selectReminderByProfileID(profileId: string) {
    try {
        const mysqlConnection = await connect();
        const query : string = 'SELECT reminderId, reminderProfilePlantId, reminderDescription, reminderRecurrence, reminderStartDate FROM reminder INNER JOIN profilePlant ON reminder.reminderProfilePlantId = profilePlant.profilePlantId WHERE profilePlant.profilePlantProfileId = UUID_TO_BIN(:profileId)'

        const [rows] = await mysqlConnection.execute(query, {profileId});
        // @ts-ignore is required so that rows can be interacted with like the array it is

        return rows
    } catch (e) {
        console.error(e)
        return null
    }
}