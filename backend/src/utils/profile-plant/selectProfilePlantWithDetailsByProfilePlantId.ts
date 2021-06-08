import {connect} from "../database.utils";
import {ProfilePlant} from "../interfaces/ProfilePlant";

export async function selectProfilePlantWithDetailsByProfilePlantId(profilePlantId: string) {
    try {
        const mysqlConnection = await connect();
        const query: string = 'SELECT profilePlant.profilePlantId, profilePlant.profilePlantPlantId, profilePlant.profilePlantProfileId, profilePlant.profilePlantNotes, plant.plantId, plant.plantBloomPeriod, plant.plantCommonName,plant.plantDuration, plant.plantDroughtTolerance,plant.plantGrowthHabit, plant.plantGrowthPeriod, plant.plantMatureHeight, plant.plantMinFrostFreeDays, plant.plantPrecipitationMax, plant.plantPrecipitationMin, plant.plantRootDepthMinimum, plant.plantScientificName, plant.plantShadeTolerance, plant.plantToxicity FROM profilePlant INNER JOIN plant on profilePlant.profilePlantPlantId = plant.plantId WHERE profilePlant.profilePlantId = UUID_TO_BIN(:profilePlantId)'

        const [rows] = await mysqlConnection.execute(query, {profilePlantId});

        // @ts-ignore is required so that rows can be interacted with like the array it is
        return rows.length !== 0 ? rows[0] : undefined;
    } catch (e) {
        console.error(e)
        return null
    }
}