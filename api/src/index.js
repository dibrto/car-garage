import express from "express";
import cors from "cors";
import router from "./router.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1", router);

const PORT = 3031;
app.listen(PORT, () => console.log(`Server is listening on port http://localhost:${PORT}`));
