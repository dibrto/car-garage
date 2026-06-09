import { Router } from "express";
import fetch from "node-fetch";

const carApiController = Router();

carApiController.get("/makes", async (req, res) => {
    const { year } = req.query;
    const response = await fetch(`https://carapi.app/api/makes/v2?year=${year}`);
    const data = await response.json();
    res.json(data);
});

export default carApiController;