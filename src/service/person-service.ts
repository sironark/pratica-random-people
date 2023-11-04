import { getRandomDB, getTotalPeopleDB } from "repositories/person-repository";


export async function getRandomService() {

    const count = await getTotalPeopleDB()
    console.log(count)
    //const answare = await getRandomDB(id);
    //return answare.rows
}