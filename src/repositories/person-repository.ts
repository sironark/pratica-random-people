import db from "../database/database-connection";
import { Count, Person } from "../protocols/person-protocols";

export async function getRandomDB(id:number) {
    return db.query<Person>(`
    SELECT * 
    FROM people 
    WHERE id = $1`,[id])
}

export async function getTotalPeopleDB() {
    const result = await db.query<Count>(`SELECT COUNT (*) FROM people;`)
    return result.rows[0]
}