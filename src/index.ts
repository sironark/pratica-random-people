import express from "express";
import router from "../src/routes/index-router";


const app = express();
app.use(express.json());
app.use(router)

//END POINTS

app.listen(5000, () => console.log(`Server is up and running or port 5000`));