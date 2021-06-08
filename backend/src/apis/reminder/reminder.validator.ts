import {Schema} from "express-validator";

export const reminderValidator : Schema = {
    reminderId: {
        isUUID: {
            errorMessage: 'oooppsss'
        },
    },
    reminderProfilePlantId: {
        isUUID: {
            errorMessage: 'oooppsss'
        },
    },

    reminderDescription : {
        trim : true,
        escape : true,
    },

    reminderRecurrence : {
        isInt : {
        errorMessage : 'invalid reminder repeat interval'
        }
    },

    reminderStartDate  :  {
        isDate : {
        errorMessage: 'not a valid date'
        }
    },
};