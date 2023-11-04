import { getRandom } from "../controllers/person-controller";
import { Router } from "express";

const router = Router();

router.get("/person", getRandom)

export default router;
