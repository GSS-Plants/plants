import {Request, Response} from "express";
import {Reminder} from "../../utils/interfaces/Reminder";
import uuid from "uuid";
import {insertReminder} from "../../utils/Reminder/InsertReminder";

export async function postReminderController(request: Request, response: Response): Promise<Response> {
    try {
        const {reminderProfilePlantId, reminderDescription, reminderRecurrence, reminderStartDate} = request.body
        const reminder: Reminder = {
            reminderId: uuid(),
            reminderProfilePlantId,
            reminderDescription,
            reminderRecurrence,
            reminderStartDate,
        }
        await insertReminder(reminder)
        return response.json({status: 200, data: null, message: "reminder inserted successfully"})
    } catch (error) {
        return response.json({status: 400, data: null, message: error.message})
    }
}
