import {connect} from "../database.utils";
import {Plant} from "../interfaces/Plant";

export async function selectPlantByScientificName(text: string) {
    try {
        const mysqlConnection = await connect();

        const query: string = "SELECT BIN_TO_UUID(plantId), plant.plantBloomPeriod, plant.plantCommonName, plant.plantDuration, plant.plantDroughtTolerance, plant.plantGrowthHabit, plant.plantGrowthPeriod, plant.plantMatureHeight, plant.plantMinFrostFreeDays, plant.plantPrecipitationMax, plant.plantPrecipitationMin, plant.plantRootDepthMinimum, plant.plantScientificName, plant.plantShadeTolerance, plant.plantToxicity FROM plant WHERE plant.plantScientificName LIKE '%:text%'";

        const [rows] = await mysqlConnection.query(query, text);
        await mysqlConnection.release()

        //@ts-ignore
        return rows
    } catch (e) {
        console.error(e)
        return null
    } finally {
        // mysqlConnection.release()
    }
}