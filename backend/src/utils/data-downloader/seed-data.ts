import {v1 as uuid} from "uuid";
import {connect} from "../database.utils";
import {ProfilePlant} from "../interfaces/ProfilePlant";
import {insertProfilePlant} from "../profile-plant/insertProfilePlant";
import {Reminder} from "../interfaces/Reminder";
import {insertReminder} from "../Reminder/InsertReminder";



function seedData(): Promise<any> {
    async function main() {
        try {
            const mysqlConnection = await connect();
            const profileQuery: string = "SELECT BIN_TO_UUID(profileId) AS id FROM profile"
            const [profiles] = await mysqlConnection.query(profileQuery)

            // @ts-ignore
            let profileId: string = profiles[0].id

            const profilePlantQuery: string = "SELECT BIN_TO_UUID(profilePlantId) AS id FROM profilePlant WHERE profilePlantProfileId = UUID_TO_BIN(:profileId)"
            const [profilePlants] = await mysqlConnection.query(profilePlantQuery, {profileId})

            // @ts-ignore
            if (profilePlants.length === 0) {
                await makeProfilePlants(mysqlConnection, profileId);
            }

            await makeReminders(mysqlConnection, profilePlants);
        } catch (error) {
            console.error(error);
        }
    }

    return main();
}

async function makeProfilePlants(mysqlConnection: any, profileId: string) {
    const query: string = "SELECT BIN_TO_UUID(plantId) AS id FROM plant WHERE plant.plantCommonName LIKE '%nettle%'"
    const [rows] = await mysqlConnection.query(query)
    //@ts-ignore
    rows.map(async row => {
        let profilePlant: ProfilePlant = {
            profilePlantId: uuid(),
            profilePlantPlantId: row.id,
            profilePlantProfileId: profileId,
            profilePlantNotes: "I am a pretty pretty plant but please don't poke me or I'll poke you back"
        }

        console.log(await insertProfilePlant(profilePlant))
    })
}

async function makeReminders(mysqlConnection: any, rows: any) {
    console.log('I got some plants: ', rows)
    //@ts-ignore
    rows.map(async row => {
        let recurrence: number = Math.floor(Math.random()*12) + 2
        let reminder: Reminder = {
            reminderId: uuid(),
            reminderDescription: "water this plant carefully yet thoroughly",
            reminderProfilePlantId: row.id,
            reminderRecurrence: recurrence,
            reminderStartDate: '2021-06-01'
        }
        console.log(await insertReminder(reminder))
    })

}

seedData().catch(error => {
        console.error(error);
    }
)