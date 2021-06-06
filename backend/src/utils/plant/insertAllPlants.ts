import {connect} from "../database.utils";
import {Plant} from "../interfaces/Plant";

export async function insertAllPlants(plants: Plant[]) {
let count = 1
    const mysqlConnection = await connect();

    for (let plant of plants) {
        if (plant === undefined) {
            mysqlConnection.destroy()
        }
        try {
            const query: string = 'INSERT INTO plant(plantId, plantBloomPeriod, plantCommonName, plantDuration, plantDroughtTolerance, plantGrowthHabit, plantGrowthPeriod, plantMatureHeight, plantMinFrostFreeDays, plantPrecipitationMax, plantPrecipitationMin, plantRootDepthMinimum, plantScientificName, plantShadeTolerance, plantToxicity) VALUES (UUID_TO_BIN(:plantId), :plantBloomPeriod, :plantCommonName, :plantDuration, :plantDroughtTolerance, :plantGrowthHabit, :plantGrowthPeriod, :plantMatureHeight, :plantMinFrostFreeDays, :plantPrecipitationMax, :plantPrecipitationMin, :plantRootDepthMinimum, :plantScientificName, :plantShadeTolerance, :plantToxicity)';

            const [rows] = await mysqlConnection.query(query, plant);

            //@ts-ignore
            console.log('Plant #' + count + ' Created: ' + plant.plantCommonName)
            count++
        } catch (e) {
            console.error(e.message)
            return null
        }
    }
    console.log("Finished import")
    await mysqlConnection.release()

}