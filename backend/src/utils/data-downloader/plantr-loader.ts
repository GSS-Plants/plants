import axios from "axios";
import {Profile} from "../interfaces/Profile";
import {v1 as uuid} from 'uuid';
import {setHash} from "../auth.utils";
import {Plant} from "../interfaces/Plant";
import {insertAllPlants} from "../plant/insertAllPlants";

const fs = require('fs')
const csv = require('csv-parser')

function plantrLoader(): Promise<any> {
    async function main() {
        try {
            await downloadPlants();

        } catch (error) {
            console.error(error);
        }
    }

    return main();

}

async function downloadPlants() {
    try {
        const results: any = []
        const plants: any = []
        // headers had to be removed from .csv and added to pipe() to prevent first header being read incorrectly.
        fs.createReadStream('./plant-data.csv')
            .pipe(csv(['plantBloomPeriod','plantCommonName','plantDuration','plantDroughtTolerance','plantGrowthHabit','plantGrowthPeriod','plantMatureHeight','plantMinFrostFreeDays','plantPrecipitationMax','plantPrecipitationMin','plantRootDepthMinimum','plantScientificName','plantShadeTolerance','plantToxicity']))
            .on('data', (data: any) => {
                results.push(data);
            })
            .on('end', async () => {
                for (let result of results) {

                    const {
                        plantBloomPeriod,
                        plantCommonName,
                        plantDuration,
                        plantDroughtTolerance,
                        plantGrowthHabit,
                        plantGrowthPeriod,
                        plantMatureHeight,
                        plantMinFrostFreeDays,
                        plantPrecipitationMax,
                        plantPrecipitationMin,
                        plantRootDepthMinimum,
                        plantScientificName,
                        plantShadeTolerance,
                        plantToxicity
                    } = result

                    const plant: Plant = {
                        plantId: uuid(),
                        plantBloomPeriod,
                        plantCommonName,
                        plantDroughtTolerance,
                        plantDuration,
                        plantGrowthHabit,
                        plantGrowthPeriod,
                        plantMatureHeight,
                        plantMinFrostFreeDays,
                        plantPrecipitationMax,
                        plantPrecipitationMin,
                        plantRootDepthMinimum,
                        plantScientificName,
                        plantShadeTolerance,
                        plantToxicity
                    }
                    plants.push(plant)
                }
                console.log(await insertAllPlants(plants))

            })

    } catch (e) {
        throw e
    }
}

plantrLoader().catch(error => {
        console.error(error);
    }
)