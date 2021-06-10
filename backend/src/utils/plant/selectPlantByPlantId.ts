import {connect} from "../database.utils";
import {Plant} from "../interfaces/Plant";

export async function selectPlantByPlantId(plantId: string) {
    try {
        const mysqlConnection = await connect();

        const [rows] = await mysqlConnection.execute("SELECT BIN_TO_UUID(plantId) AS plantId, plantBloomPeriod, plantCommonName, plantDuration, plantDroughtTolerance, plantGrowthHabit, plantGrowthPeriod, plantMatureHeight, plantMinFrostFreeDays, plantPrecipitationMax, plantPrecipitationMin, plantRootDepthMinimum, plantScientificName, plantShadeTolerance, plantToxicity FROM plant WHERE plantId = UUID_TO_BIN(:plantId)", {plantId})

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
