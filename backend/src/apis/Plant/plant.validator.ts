import {Schema} from "express-validator";

export const plantValidator: Schema = {
    plantId: {
        isUUID: {
            errorMessage: 'oooppsss'
        },
    },
};

// FOR WHEN WE IMPLEMENT INSERT PLANT
// plantBloomPeriod: {
//     isUUID: {
//         errorMessage: 'oooppsss'
//     }
// },
// plantCommonName: {
//     isUUID: {
//         errorMessage: 'oooppsss'
//     }
// },
// plantDuration: {
//     isUUID: {
//         errorMessage: 'oooppsss'
//     }
// },
// plantDroughtTolerance: {
//     isInt: {
//         errorMessage: 'Drought tolerance must be an integer'
//     }
// },
// plantGrowthHabit: {
//     isUUID: {
//         errorMessage: 'oooppsss'
//     }
// },
// plantGrowthPeriod: {
//     isUUID: {
//         errorMessage: 'oooppsss'
//     }
// },
// plantMatureHeight: {
//     isUUID: {
//         errorMessage: 'oooppsss'
//     }
// },
// plantMinFrostFreeDays: {
//     isUUID: {
//         errorMessage: 'oooppsss'
//     }
// },
// plantPrecipitationMax: {
//     isUUID: {
//         errorMessage: 'oooppsss'
//     }
// },
// plantPrecipitationMin: {
//     isUUID: {
//         errorMessage: 'oooppsss'
//     }
// },
// plantRootDepthMinimum: {
//     isUUID: {
//         errorMessage: 'oooppsss'
//     }
// },
// plantScientificName: {
//     isUUID: {
//         errorMessage: 'oooppsss'
//     }
// },
// plantShadeTolerance: {
//     isUUID: {
//         errorMessage: 'oooppsss'
//     }
// },
// plantToxicity: {
//     isUUID: {
//         errorMessage: 'oooppsss'
//     }
// },
