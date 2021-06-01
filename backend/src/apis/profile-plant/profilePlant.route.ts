/*


import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check, checkSchema} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {profileValidator} from "./profile.validator";
import {getProfileByProfileId, putProfileController} from "./profile.controller";

export const ProfilePlantRoute = Router();
ProfilePlantRoute.route('/')
    .post();
ProfilePlantRoute.route('/:profileId&:plantId')
    .get(
        asyncValidatorController([
            check("profileId", "profile is invalid").isUUID(),
            check("plantId", "plant is invalid").isUUID
        ])
        , getProfilePlantByWhateverIsClever
    )

*/
