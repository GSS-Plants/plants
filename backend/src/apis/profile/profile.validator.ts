import {Schema} from "express-validator";

export const profileValidator : Schema = {
    profileId: {
        isUUID: {
            errorMessage: 'oooppsss'
        }
    },

    profileEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid email'
        },
        trim: true
    },
    profileLogin: {
        isLength: {
            errorMessage: 'confirm login must be at least eight characters',
            options: { min: 5,  max: 32}

        },
        trim: true,
        escape: true
    },
};