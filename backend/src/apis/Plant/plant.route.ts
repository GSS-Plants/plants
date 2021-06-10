import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check, checkSchema} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {plantValidator} from "./plant.validator";
import {getAllPlants, getByCommonName, selectByScientificName} from "./plant.controller";
import {selectPlantByCommonName} from "../../utils/plant/selectPlantByCommonName";

export const PlantRoute: Router = Router();

PlantRoute.route("/")
.get(getAllPlants)

PlantRoute.route("/search-common-name/:text")
.get(getByCommonName)

PlantRoute.route("/search-scientific-name/")
.get(selectByScientificName)
