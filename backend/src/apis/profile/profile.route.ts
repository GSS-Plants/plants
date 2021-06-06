import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check, checkSchema} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {profileValidator} from "./profile.validator";
import {
    deleteProfileController,
    getProfileByProfileActivationToken,
    getProfileByProfileEmail,
    getProfileByProfileId,
    putProfileController
} from "./profile.controller";

export const ProfileRoute = Router();
ProfileRoute.route('/')
    .post(putProfileController);
ProfileRoute.route('/:profileId')
    .get(
        asyncValidatorController([
            check("profileId", "please provide a valid profileId").isUUID()
        ])
        , getProfileByProfileId
    )
.put(isLoggedIn, asyncValidatorController(checkSchema(profileValidator)), putProfileController)
ProfileRoute.route('/profileEmail/:profileEmail')
    .post(getProfileByProfileEmail);

ProfileRoute.route('/profileActivationToken/:profileActivationToken')
    .post(getProfileByProfileActivationToken);

ProfileRoute.route('/deleteProfile/:profileId')
    .delete(deleteProfileController)