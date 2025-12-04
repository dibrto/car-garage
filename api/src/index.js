import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/car-query/years", async (req, res) => {
    const response = await fetch("https://www.carqueryapi.com/api/0.3/?cmd=getYears");
    const data = await response.json();
    res.json(data);
});

const PORT = 3031;
app.listen(PORT, () => console.log(`Server is listening on port http://localhost:${PORT}`));
