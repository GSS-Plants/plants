import {Request, Response} from "express";
import {Reminder, UpdateReminder} from "../../utils/interfaces/Reminder";
import uuid from "uuid";
import {insertReminder} from "../../utils/Reminder/InsertReminder";
import {updateReminder} from "../../utils/Reminder/updateReminder";
import {deleteReminder} from "../../utils/Reminder/deleteReminder";
import {Status} from "../../utils/interfaces/Status";
import {selectReminderByReminderId} from "../../utils/Reminder/selectReminderByReminderId";
import {selectReminderByProfileId} from "../../utils/Reminder/selectReminderByProfileId";

export async function getReminderController(request: Request, response: Response): Promise<Response> {
    try {
        const reminderId: string = request.params.reminderId
        const result = await selectReminderByReminderId(reminderId)
        console.log(result)
        const status: Status = {status: 200, data: result, message: 'reminder retrieved'}
        const error: Status = {status: 400, data: result, message: 'error retrieving reminder'}
        return result !== undefined ? response.json(status) : response.json(error)

    } catch (error) {
        return response.json({status: 400, data: null, message: error.message})

    }
}

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
        const data = await insertReminder(reminder)

        const status: Status = {status: 200, data, message: null}
        const error: Status = {status: 400, data: null, message: 'reminder creation failed'}
        return data !== null ? response.json(status) : response.json(error)

    } catch (error) {
        return response.json({status: 400, data: null, message: error.message})
    }
}


export async function putReminderController(request: Request, response: Response): Promise<Response> {
    try {
        const {reminderId} = request.params
        const {reminderDescription, reminderRecurrence, reminderStartDate} = request.body
        const oldReminder: Reminder = await selectReminderByReminderId(reminderId)
        const partialReminder: UpdateReminder = {
            reminderDescription,
            reminderRecurrence,
            reminderStartDate,
        }
        const newReminder: Reminder = {
            reminderId: oldReminder.reminderId,
            reminderProfilePlantId: oldReminder.reminderProfilePlantId,
            reminderDescription: partialReminder.reminderDescription?? oldReminder.reminderDescription,
            reminderRecurrence: partialReminder.reminderRecurrence?? oldReminder.reminderRecurrence,
            reminderStartDate: partialReminder.reminderStartDate?? oldReminder.reminderStartDate

        }
        console.log('old Reminder: ', oldReminder)
        console.log('new Reminder:', newReminder)
        await updateReminder(newReminder)
        return response.json({status: 200, data: null, message: "reminder updated successfully"})
    } catch (error) {
        return response.json({status: 400, data: null, message: error.message})
    }
}

export async function deleteReminderController(request: Request, response: Response): Promise<Response> {
    try {
        const reminderId = request.params.reminderId
        await deleteReminder(reminderId)
        return response.json({status: 200, data: null, message: "reminder deleted successfully"})

    } catch (error) {
        return response.json({status: 400, data: null, message: error.message})

    }
}

export async function getReminderByProfileId(request: Request, response: Response): Promise<Response> {
    try {
        const profileId: string = request.params.profileId
        const result = await selectReminderByProfileId(profileId)
        const data = result ?? null
        const status: Status = {status: 200, data, message: 'Reminder retrieved'}
        const error: Status = {status: 400, data: null, message: 'error retrieving reminders'}
        return data !== null ? response.json(status) : response.json(error)

    } catch (error) {
        return response.json({status: 400, data: null, message: error.message})

    }
}
