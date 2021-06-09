import {Request, Response} from "express";
import {Profile} from "../../utils/interfaces/Profile";
import {Reminder} from "../../utils/interfaces/Reminder";
import uuid from "uuid";

function getSessionId(request: Request): string {
    try {
        let profile: Profile = <Profile>request.session?.profile
        return profile.profileId as string
    } catch (e) {
        return e
    }
}
//for testing outputs
export async function testController(request: Request, response: Response): Promise<Response> {
    try {
        let profileId: string = getSessionId(request)
        return response.json({status: 200, data: null, message: 'Session profile Id: ' + profileId})
    } catch (e) {
        return response.json({status: 400, data: null, message: e.message})
    }
}

export async function postReminderController(request: Request, response: Response): Promise<Response> {
    try {
    const reminderProfilePlantId : string = request.body.reminderProfilePlantId
    const reminderDescription : string = request.body.reminderDescription
    const reminderRecurrence : number = request.body.reminderRecurrence
    const reminderStartDate : number = request.body.reminderStartDate

    const reminder : Reminder = {
        reminderId : uuid (),
        reminderProfilePlantId,
        reminderDescription,
        reminderRecurrence,
        reminderStartDate

    }
        return response.json({status: 200, data: null, message: 'reminder saved successfully'})


    } catch (e) {
        return response.json({status: 400, data: null, message: e.message})
    }
}