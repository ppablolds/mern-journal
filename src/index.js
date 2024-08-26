import express from "express";
import connectDatabase from "./database/db.js";
import userRoute from "./routes/user.route.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3001
const app = express();
app.use(express.json());

app.use("/user", userRoute);

connectDatabase();
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
