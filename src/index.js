import express from "express";
import connectDatabase from "./database/db.js";
import userRoute from "./routes/user.route.js";

const app = express();
app.use(express.json());

app.use("/user", userRoute);

connectDatabase();
app.listen(3001, () => console.log("Servidor rodando na porta 3001"));
