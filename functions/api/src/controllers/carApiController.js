import { Router } from "express";
import fetch from "node-fetch";

const carApiController = Router();

carApiController.get("/makes", async (req, res) => {
    const { year } = req.query;
    const response = await fetch(`https://carapi.app/api/makes/v2?year=${year}`);
    const data = await response.json();
    res.json(data);
});

carApiController.get("/models", async (req, res) => {
    const { year, make } = req.query;
    const response = await fetch(`https://carapi.app/api/models/v2?year=${year}&make=${make}`);
    const data = await response.json();
    res.json(data);
});

carApiController.get("/trims", async (req, res) => {
    const { year, make, model } = req.query;
    const response = await fetch(`https://carapi.app/api/trims/v2?year=${year}&make=${make}&model=${model}`);
    const data = await response.json();
    res.json(data);
});

carApiController.get("/car-info", async (req, res) => {
    const { id } = req.query;
    const response = await fetch(`https://carapi.app/api/trims/v2/${id}`);
    const data = await response.json();
    res.json(data);
});

export default carApiController;