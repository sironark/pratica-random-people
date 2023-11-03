import express from "express";


const app = express();
app.use(express.json());

//END POINTS



app.listen(5000, () => console.log(`Server is up and running or port 5000`));