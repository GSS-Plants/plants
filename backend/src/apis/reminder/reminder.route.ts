import {Router} from "express";
import {
    getReminderController,
    deleteReminderController,
    postReminderController,
    putReminderController,
    getReminderByProfileId
} from "./reminder.controller";


export const ReminderRoute = Router();


ReminderRoute.route('/')
    .post(postReminderController)

ReminderRoute.route('/:reminderId')
    .put(putReminderController)
    .get(getReminderController)
    .delete(deleteReminderController)

ReminderRoute.route('/profile/:profileId')
    .get(getReminderByProfileId)
