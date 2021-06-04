import {connect} from "../database.utils";
import {Plant} from "../interfaces/Plant";

export async function insertPlant(plant: Plant) {

    try {
        const mysqlConnection = await connect();
        const query: string = 'INSERT INTO plant(plantId, plantBloomPeriod, plantCommonName, plantDuration, plantDroughtTolerance, plantGrowthHabit, plantGrowthPeriod, plantMatureHeight, plantMinFrostFreeDays, plantPrecipitationMax, plantPrecipitationMin, plantRootDepthMinimum, plantScientificName, plantShadeTolerance, plantToxicity) VALUES (UUID_TO_BIN(:plantId), :plantBloomPeriod, :plantCommonName, :plantDuration, :plantDroughtTolerance, :plantGrowthHabit, :plantGrowthPeriod, :plantMatureHeight, :plantMinFrostFreeDays, :plantPrecipitationMax, :plantPrecipitationMin, :plantRootDepthMinimum, :plantScientificName, :plantShadeTolerance, :plantToxicity)';

        const [rows] = await mysqlConnection.query(query, plant);
        mysqlConnection.release()

        //@ts-ignore
        return 'Plants Successfully Created: ' + plant.plantCommonName
    } catch (e) {
        console.error(e)
        return null
    } finally {
        // mysqlConnection.release()
    }
}