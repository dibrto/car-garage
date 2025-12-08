import { Router } from "express";
import fetch from "node-fetch";

const carQueryController = Router();

carQueryController.get("/years", async (req, res) => {
    const response = await fetch("https://www.carqueryapi.com/api/0.3/?cmd=getYears");
    const data = await response.json();
    res.json(data);
});

carQueryController.get("/makes", async (req, res) => {
    const response = await fetch("https://www.carqueryapi.com/api/0.3/?cmd=getMakes&year=" + req.query.year);
    const data = await response.json();
    res.json(data);
});

carQueryController.get("/models", async (req, res) => {
    const {year, make} = req.query;
    const response = await fetch(`https://www.carqueryapi.com/api/0.3/?cmd=getModels&year=${year}&make=${make}`);
    const data = await response.json();
    res.json(data);
});

carQueryController.get("/trims", async (req, res) => {
    const {year, make, model} = req.query;
    const response = await fetch(`https://www.carqueryapi.com/api/0.3/?cmd=getTrims&full_results=0&year=${year}&make=${make}&model=${model}`);
    const data = await response.json();
    res.json(data);
});


export default carQueryController;