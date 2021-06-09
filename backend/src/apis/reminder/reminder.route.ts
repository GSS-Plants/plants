import {Router} from "express";
import {postReminderController} from "./reminder.controller";


export const ReminderRoute = Router ();


ReminderRoute.route('/')
.post (postReminderController)