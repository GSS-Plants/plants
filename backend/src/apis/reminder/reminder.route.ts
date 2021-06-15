import {Router} from "express";

import {getReminderController, deleteReminderController, postReminderController, putReminderController, getRemindersByProfileId} from "./reminder.controller";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {checkSchema} from "express-validator";
import {reminderValidator} from "./reminder.validator";


export const ReminderRoute = Router();


ReminderRoute.route('/')
    .post(asyncValidatorController(checkSchema(reminderValidator)), postReminderController)

ReminderRoute.route('/:reminderId')
    .put(putReminderController)
    .get(getReminderController)
    .delete(deleteReminderController)

ReminderRoute.route('/profile/:profileId')
    .get(getRemindersByProfileId)
