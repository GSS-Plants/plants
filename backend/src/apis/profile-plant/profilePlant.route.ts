

import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check, checkSchema} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {getProfilePlantByProfilePlantIdController, postProfilePlantController, putProfilePlantController} from "./profilePlant.controller";
import {profileValidator} from "../profile/profile.validator";

export const ProfilePlantRoute = Router();
ProfilePlantRoute.route('/:plantId')
    .post(postProfilePlantController);

ProfilePlantRoute.route('/:profilePlantId')
    .get(
        asyncValidatorController([
            check("profilePlantId", "not a valid id").isUUID()
        ])
        , getProfilePlantByProfilePlantIdController
    )
    .put(isLoggedIn, asyncValidatorController(checkSchema(profileValidator)), putProfilePlantController)
