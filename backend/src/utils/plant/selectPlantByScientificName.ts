import {connect} from "../database.utils";
import {Plant} from "../interfaces/Plant";

export async function selectPlantByScientificName(text: string) {
    try {
        const name = `%${text}%`
        console.log(name);
        const mysqlConnection = await connect();

        // const [rows] = await mysqlConnection.query(query, text);
        const [rows] = await mysqlConnection.execute("SELECT BIN_TO_UUID(plantId) AS plantId, plantBloomPeriod, plantCommonName, plantDuration, plantDroughtTolerance, plantGrowthHabit, plantGrowthPeriod, plantMatureHeight, plantMinFrostFreeDays, plantPrecipitationMax, plantPrecipitationMin, plantRootDepthMinimum, plantScientificName, plantShadeTolerance, plantToxicity FROM plant WHERE plantScientificName LIKE :name", {name})
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