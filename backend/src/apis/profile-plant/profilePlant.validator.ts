import {Schema} from "express-validator";

export const profilePlantValidator : Schema = {
    profilePlantId: {
        isUUID: {
            errorMessage: 'Plant ID is invalid WHAT DID YOU DO'
        }
    },
    profilePlantPlantId: {
        isUUID: {
            errorMessage: 'Plant ID is invalid WHAT DID YOU DO'
        }
    },
    profilePlantProfileId: {
        isUUID: {
            errorMessage: 'Plant ID is invalid WHAT DID YOU DO'
        }
    },
    profilePlantNotes: {
        trim: true,
        escape: true

    }
}