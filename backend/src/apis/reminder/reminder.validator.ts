import {Schema} from "express-validator";

export const reminderValidator: Schema = {

    reminderProfilePlantId: {
        isUUID: {
            errorMessage: 'ProfilePlant Id is invalid'
        },
    },

    reminderDescription: {
        trim: true,
        escape: true,
    },

    reminderRecurrence: {
        isInt: {
            errorMessage: 'Reminder Recurrence is invalid'
        }
    },

    reminderStartDate: {
        isDate: {
            options: {format: 'YYYY-MM-DD'},
            errorMessage: 'Reminder start date is invalid'
        }
    },
};