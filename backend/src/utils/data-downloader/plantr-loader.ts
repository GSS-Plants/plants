import axios from "axios";

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
        try {
            const userRequest = await axios.get("https://jsonplaceholder.typicode.com/users")
            for (const user of userRequest.data) {
                console.log(user.userName)
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