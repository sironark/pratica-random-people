import { getRandomDB, getTotalPeopleDB } from "../repositories/person-repository";


export async function getRandomService() {

    const {count} = await getTotalPeopleDB()
    const numeroAleatorio: number = Math.floor(Math.random() * Number(count)) + 1;
    const answare = await getRandomDB(numeroAleatorio);
    return answare.rows[0]
}