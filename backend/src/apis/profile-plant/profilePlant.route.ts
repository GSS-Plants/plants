import {Request, Response, Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check, checkSchema} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {deleteProfilePlantController, getProfilePlantByProfilePlantIdController, getProfilePlantWithDetailsByProfileIdController, postProfilePlantController, putProfilePlantController} from "./profilePlant.controller";
import {profileValidator} from "../profile/profile.validator";

export const ProfilePlantRoute = Router();
ProfilePlantRoute.route('/addplant/:plantId')
    .post(async function(request: Request, response: Response) {
        return 'hush';
});
    // .post(postProfilePlantController);

ProfilePlantRoute.route('/greenhouse/:profileId/:profilePlantId')
    .get(
        asyncValidatorController([
            check("profilePlantId", "not a valid id").isUUID()
        ])
        , getProfilePlantByProfilePlantIdController
    )
    .put(isLoggedIn, asyncValidatorController(checkSchema(profileValidator)), putProfilePlantController)

ProfilePlantRoute.route('/greenhouse/:profileId')
    .get(getProfilePlantWithDetailsByProfileIdController)

ProfilePlantRoute.route('/greenhouse/delete/:profilePlantId')
    .delete(deleteProfilePlantController)