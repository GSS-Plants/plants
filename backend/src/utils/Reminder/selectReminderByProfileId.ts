import {connect} from "../database.utils";


export async function selectReminderByProfileId(profileId: string) {
    try {
        const mysqlConnection = await connect();
        const query : string = "SELECT BIN_TO_UUID(reminderId) AS reminderId, BIN_TO_UUID(reminderProfilePlantId) AS reminderProfilePlantId, plant.plantCommonName,reminderDescription, reminderRecurrence, DATE_FORMAT(reminderStartDate, '%m/%d/%Y') AS reminderStartDate FROM reminder INNER JOIN profilePlant ON reminder.reminderProfilePlantId = profilePlant.profilePlantId INNER JOIN plant on  profilePlant.profilePlantPlantId = plant.plantId WHERE profilePlant.profilePlantProfileId = UUID_TO_BIN(:profileId)"

        const [rows] = await mysqlConnection.execute(query, {profileId});
        // @ts-ignore is required so that rows can be interacted with like the array it is
        console.log(rows[0])
        // @ts-ignore is required so that rows can be interacted with like the array it is

        return rows
    } catch (e) {
        console.error(e)
        return null
    }
}