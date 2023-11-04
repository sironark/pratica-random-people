import httpStatus from "http-status";
import { Request, Response } from "express";
import { getRandomService } from "../service/person-service";

export async function getRandom(req: Request, res: Response) {
    const answare = await getRandomService();
    res.status(httpStatus.OK).send(answare)
}