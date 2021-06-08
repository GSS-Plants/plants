import {connect} from "../database.utils";
import {Plant} from "../interfaces/Plant";

export async function selectPlantByPlantId(text: string) {
    try {
        const name = `%${text}%`
        const mysqlConnection = await connect();
        const query: string = "SELECT BIN_TO_UUID(plantId), plant.plantBloomPeriod, plant.plantCommonName, plant.plantDuration, plant.plantDroughtTolerance, plant.plantGrowthHabit, plant.plantGrowthPeriod, plant.plantMatureHeight, plant.plantMinFrostFreeDays, plant.plantPrecipitationMax, plant.plantPrecipitationMin, plant.plantRootDepthMinimum, plant.plantScientificName, plant.plantShadeTolerance, plant.plantToxicity FROM plant WHERE plant.plantId LIKE '%:text%'";

        // const [rows] = await mysqlConnection.query(query, text);
        const [rows] = await mysqlConnection.execute("SELECT BIN_TO_UUID(plantId), plant.plantBloomPeriod, plant.plantCommonName, plant.plantDuration, plant.plantDroughtTolerance, plant.plantGrowthHabit, plant.plantGrowthPeriod, plant.plantMatureHeight, plant.plantMinFrostFreeDays, plant.plantPrecipitationMax, plant.plantPrecipitationMin, plant.plantRootDepthMinimum, plant.plantScientificName, plant.plantShadeTolerance, plant.plantToxicity FROM plant WHERE plant.plantId LIKE :name", {name})
        await mysqlConnection.release()

        //@ts-ignore
        return rows
    } catch (e) {
        console.error(e)
        throw e
    } finally {
        // mysqlConnection.release()
    }
}
