const express = require("express");
const connectDatabase = require("./database/db");
const userRoute = require("./routes/user.route");

const app = express();
app.use(express.json());

app.use("/user", userRoute);

connectDatabase();
app.listen(3001, () => console.log("Servidor rodando na porta 3001"));
