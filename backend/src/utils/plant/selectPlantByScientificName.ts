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
        rows.map(plant => {
            if(plant.plantBloomPeriod === '') {
                plant.plantBloomPeriod = 'no data'
            }
            if(plant.plantDroughtTolerance === -1) {
                plant.plantDroughtTolerance = 'no data'
            }
            if(plant.plantPrecipitationMax === 0) {
                plant.plantPrecipitationMax = 'no data'
            }
            if(plant.plantPrecipitationMin === 0) {
                plant.plantPrecipitationMin = 'no data'
            }
            if(plant.plantShadeTolerance === -1) {
                plant.plantShadeTolerance = 'no data'
            }
            if(plant.plantToxicity === -1) {
                plant.plantToxicity = 'no data'
            }
        })

        //@ts-ignore
        return rows
    } catch (e) {
        console.error(e)
        throw e
    } finally {
        // mysqlConnection.release()
    }
}