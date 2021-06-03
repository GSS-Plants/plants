import axios from "axios";
import {Profile} from "../interfaces/Profile";
import uuid from "uuid";

function plantrLoader() : Promise<any> {
    async function main() {
        try {
            await downloadUsers();

        } catch (error) {
            console.error(error);
        }
    }
    return main();

    async function downloadUsers() {
        const results: any = []
        try {
            const userRequest = await axios.get("https://jsonplaceholder.typicode.com/users")
            for (const user of userRequest.data) {
                const profile: Profile = {
                    profileId: uuid(),
                    profileEmail: user.email,
                    profileLogin: user.username,
                }
            }
        } catch (error) {
            throw error;
        }
    }
}

plantrLoader().catch(error => {
    console.error(error);
    }
)