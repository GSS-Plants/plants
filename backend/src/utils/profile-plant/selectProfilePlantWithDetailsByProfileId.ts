import {connect} from "../database.utils";
import {ProfilePlant} from "../interfaces/ProfilePlant";

export async function selectProfilePlantWithDetailsByProfileId(profileId: string) {
    try {
        const mysqlConnection = await connect();
        const query: string = 'SELECT profilePlant.profilePlantId, profilePlant.profilePlantPlantId, profilePlant.profilePlantProfileId, profilePlant.profilePlantNotes, plant.plantId, plant.plantBloomPeriod, plant.plantCommonName,plant.plantDuration, plant.plantDroughtTolerance,plant.plantGrowthHabit, plant.plantGrowthPeriod, plant.plantMatureHeight, plant.plantMinFrostFreeDays, plant.plantPrecipitationMax, plant.plantPrecipitationMin, plant.plantRootDepthMinimum, plant.plantScientificName, plant.plantShadeTolerance, plant.plantToxicity FROM profilePlant INNER JOIN plant on profilePlant.profilePlantPlantId = plant.plantId WHERE profilePlant.profilePlantProfileId = UUID_TO_BIN(:profileId)'

        // @ts-ignore is required so that rows can be interacted with like the array it is
        const [rows] = await mysqlConnection.execute(query, profileId);
        return 'Plant retrieved'
    } catch (e) {
        console.error(e)
        return null
    }
}