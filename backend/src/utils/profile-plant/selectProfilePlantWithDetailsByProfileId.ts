import {connect} from "../database.utils";
import {ProfilePlant} from "../interfaces/ProfilePlant";

export async function selectProfilePlantWithDetailsByProfileId(profileId: string) {
    try {
        const mysqlConnection = await connect();
        const query: string = 'SELECT BIN_TO_UUID(profilePlantId) AS profilePlantId, BIN_TO_UUID(profilePlantPlantId) AS profilePlantPlantId, BIN_TO_UUID(profilePlantProfileId) AS profilePlantProfileId, profilePlantNotes , BIN_TO_UUID(plant.plantId) AS plantId, plant.plantBloomPeriod, plant.plantCommonName,plant.plantDuration, plant.plantDroughtTolerance,plant.plantGrowthHabit, plant.plantGrowthPeriod, plant.plantMatureHeight, plant.plantMinFrostFreeDays, plant.plantPrecipitationMax, plant.plantPrecipitationMin, plant.plantRootDepthMinimum, plant.plantScientificName, plant.plantShadeTolerance, plant.plantToxicity FROM profilePlant INNER JOIN plant on profilePlant.profilePlantPlantId = plant.plantId WHERE profilePlant.profilePlantProfileId = UUID_TO_BIN(:profileId)'

        const [rows] = await mysqlConnection.execute(query, {profileId});

        // @ts-ignore is required so that rows can be interacted with like the array it is
        return rows.length !== 0 ? {...rows} : undefined;
    } catch (e) {
        console.error(e)
        return null
    }
}