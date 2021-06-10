import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check, checkSchema} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {plantValidator} from "./plant.validator";
import {getAllPlants, getByCommonName, selectByScientificName, getPlantByPlantId} from "./plant.controller";
import {selectPlantByCommonName} from "../../utils/plant/selectPlantByCommonName";

export const PlantRoute: Router = Router();

PlantRoute.route("/")
.get(getAllPlants)

PlantRoute.route('/:plantId')
    .get(getPlantByPlantId)

PlantRoute.route("/search-common-name/:text")
.get(getByCommonName)

PlantRoute.route("/search-scientific-name/")
.get(selectByScientificName)
