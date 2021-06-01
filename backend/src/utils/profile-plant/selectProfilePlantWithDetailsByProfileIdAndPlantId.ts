import {connect} from "../database.utils";
import {ProfilePlant} from "../interfaces/ProfilePlant";

export async function selectProfilePlantWithDetailsByProfileIdAndPlantId(profilePlant: ProfilePlant) {
    try {
        const mysqlConnection = await connect();
        const query: string = 'SELECT profilePlant.profilePlantPlantId, profilePlant.profilePlantProfileId, profilePlant.profilePlantNotes, plant.plantId, plant.plantBloomPeriod, plant.plantCommonName,plant.plantDuration, plant.plantDroughtTolerance,plant.plantGrowthHabit, plant.plantGrowthPeriod, plant.plantMatureHeight, plant.plantMinFrostFreeDays, plant.plantPrecipitationMax, plant.plantPrecipitationMin, plant.plantRootDepthMinimum, plant.plantScientificName, plant.plantShadeTolerance, plant.plantToxicity FROM profilePlant INNER JOIN plant on profilePlant.profilePlantPlantId = plant.plantId WHERE profilePlant.profilePlantProfileId = UUID_TO_BIN(:profilePlantProfileId) AND profilePlant.profilePlantPlantId = UUID_TO_BIN(:profilePlantProfileId)'

        const [rows] = await mysqlConnection.execute(query, profilePlant);
        return 'Plant retrieved'
    } catch (e) {
        console.error(e)
        return null
    }
}