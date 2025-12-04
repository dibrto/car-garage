import { Router } from "express";
import fetch from "node-fetch";

const carQueryController = Router();

carQueryController.get("/years", async (req, res) => {
    const response = await fetch("https://www.carqueryapi.com/api/0.3/?cmd=getYears");
    const data = await response.json();
    res.json(data);
});

export default carQueryController;