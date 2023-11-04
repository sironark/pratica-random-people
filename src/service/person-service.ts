import { getRandomDB, getTotalPeopleDB } from "repositories/person-repository";


export async function getRandomService() {

    const count = Number(await getTotalPeopleDB())
    console.log(count)
    const numeroAleatorio: number = Math.floor(Math.random() * count) + 1;

    const answare = await getRandomDB(numeroAleatorio);
    return answare.rows[0]
}