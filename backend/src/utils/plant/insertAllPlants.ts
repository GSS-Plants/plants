import {connect} from "../database.utils";
import {Plant} from "../interfaces/Plant";

export async function insertAllPlants(plants: Plant[]) {
let count = 0
    const mysqlConnection = await connect();

    for (let plant of plants) {
        try {
            const query: string = 'INSERT INTO plant(plantId, plantBloomPeriod, plantCommonName, plantDuration, plantDroughtTolerance, plantGrowthHabit, plantGrowthPeriod, plantMatureHeight, plantMinFrostFreeDays, plantPrecipitationMax, plantPrecipitationMin, plantRootDepthMinimum, plantScientificName, plantShadeTolerance, plantToxicity) VALUES (UUID_TO_BIN(:plantId), :plantBloomPeriod, :plantCommonName, :plantDuration, :plantDroughtTolerance, :plantGrowthHabit, :plantGrowthPeriod, :plantMatureHeight, :plantMinFrostFreeDays, :plantPrecipitationMax, :plantPrecipitationMin, :plantRootDepthMinimum, :plantScientificName, :plantShadeTolerance, :plantToxicity)';

            const [rows] = await mysqlConnection.query(query, plant);

            //@ts-ignore
            console.log('Plants Successfully Created: ' + plant.plantCommonName)
            count++
        } catch (e) {
            console.error(count + ' successful insertions')
            console.error(e.message)
            return count + ' successful insertions'
        }
    }
    await mysqlConnection.release()

}