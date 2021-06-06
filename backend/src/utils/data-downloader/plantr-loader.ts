import axios from "axios";
import {Profile} from "../interfaces/Profile";
import {v1 as uuid} from 'uuid';
import {setHash} from "../auth.utils";
import {Plant} from "../interfaces/Plant";
import {insertProfile} from "../profile/insertProfile";
import {insertAllPlants} from "../plant/insertAllPlants";

const fs = require('fs')
const csv = require('csv-parser')

function plantrLoader(): Promise<any> {
    async function main() {
        try {
            await downloadUsers();
            await downloadPlants();

        } catch (error) {
            console.error(error);
        }
    }

    return main();

    async function downloadUsers() {
        try {
            const profileHash = await setHash("password")
            const userRequest = await axios.get("https://jsonplaceholder.typicode.com/users")
            for (const user of userRequest.data) {
                const profile: Profile = {
                    profileId: uuid(),
                    profileEmail: user.email,
                    profileLogin: user.username,
                    profileHash: profileHash,
                    profileActivationToken: null
                }
                // console.log(await insertProfile(profile))

            }
        } catch (error) {
            throw error;
        }
    }
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