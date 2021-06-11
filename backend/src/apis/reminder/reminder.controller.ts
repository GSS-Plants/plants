import {Request, Response} from "express";
import {Reminder} from "../../utils/interfaces/Reminder";
import uuid from "uuid";
import {insertReminder} from "../../utils/Reminder/InsertReminder";
import {updateReminder} from "../../utils/Reminder/updateReminder";
import {deleteReminder} from "../../utils/Reminder/deleteReminder";
import {Status} from "../../utils/interfaces/Status";
import {selectReminderByReminderId} from "../../utils/Reminder/selectReminderByReminderId";

export async function getReminderController(request: Request, response: Response): Promise<Response> {
    try {
        const reminderId: string = request.params.reminderId
        const result = await selectReminderByReminderId(reminderId)
        const data = result ?? null
        const status: Status = {status: 200, data, message: 'reminder removed'}
        const error: Status = {status: 400, data: null, message: 'error removing reminder'}
        return data !== null? response.json(status) : response.json(error)

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
        await insertReminder(reminder)
        return response.json({status: 200, data: null, message: "reminder inserted successfully"})
    } catch (error) {
        return response.json({status: 400, data: null, message: error.message})
    }
}


export async function putReminderController(request: Request, response: Response): Promise<Response> {
    try {
        const {reminderProfilePlantId, reminderDescription, reminderRecurrence, reminderStartDate} = request.body
        const reminder: Reminder = {
            reminderId: request.params.reminderId,
            reminderProfilePlantId,
            reminderDescription,
            reminderRecurrence,
            reminderStartDate,
        }
        await updateReminder(reminder)
        return response.json({status: 200, data: null, message: "reminder inserted successfully"})
    } catch (error) {
        return response.json({status: 400, data: null, message: error.message})
    }
}

export async function deleteReminderController(request: Request, response: Response): Promise<Response> {
    try {
        const reminderId = request.params.reminderId
        await deleteReminder(reminderId)
        return response.json({status: 200, data: null, message: "reminder inserted successfully"})

    } catch (error) {
return response.json({status: 400, data: null, message: error.message})

    }
    }

