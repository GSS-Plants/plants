import {Router} from "express";
import {testController} from "./reminder.controller";


export const ReminderRoute = Router ();


ReminderRoute.route('/')
.get (testController)