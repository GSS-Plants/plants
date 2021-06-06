import axios from "axios";
import {Profile} from "../interfaces/Profile";
import {v1 as uuid} from 'uuid';
import {setHash} from "../auth.utils";
import {Plant} from "../interfaces/Plant";
import {insertProfile} from "../profile/insertProfile";
import {insertAllPlants} from "../plant/insertAllPlants";
import {insertProfilePlant} from "../profile-plant/insertProfilePlant";

const fs = require('fs')
const csv = require('csv-parser')
let plantIds: string[] = []
let userIds: (string|null)[] = []

async function makeProfilePlants() {
    const plantIpsum: string = 'Cool off red curry tofu noodles crunchy lemon lime minty Caribbean red habanero coconut lime matcha cremini mushrooms shiitake mushrooms green papaya salad chai tea lemongrass peanut butter crunch blueberry chia seed jam walnut pesto tart cilantro.'

    for (let i = 0, j = 0; i < plantIds.length; i++) {
        console.log(await insertProfilePlant(uuid(), userIds[j], plantIds[i], plantIpsum))
        if (j < 3 && i %3 === 0) {
            j++
        }
    }
}

function plantrLoader(): Promise<any> {
    async function main() {
        try {
            await downloadUsers();
            await downloadPlants();
            await makeProfilePlants();

        } catch (error) {
            console.error(error);
        }
    }

    return main();

    async function downloadUsers() {
        try {
            const profileHash = await setHash("password")
            const userRequest = await axios.get("https://jsonplaceholder.typicode.com/users")
            let userCount = 0
            for (const user of userRequest.data) {
                const profile: Profile = {
                    profileId: uuid(),
                    profileEmail: user.email,
                    profileLogin: user.username,
                    profileHash: profileHash,
                    profileActivationToken: null
                }
                userCount++
                userIds.push(profile.profileId)
                console.log(await insertProfile(profile))
                if (userCount === 4) {
                    break
                }
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
                for (let i = 0; i < results.length; i++) {

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
                    } = results[i]

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
                    if (i%150 === 0) {
                        plantIds.push(plant.plantId)
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