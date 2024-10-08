import express from "express";
import connectDatabase from "./database/db.js";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import newsRoute from "./routes/news.route.js";
import swaggerRoute from "./routes/swagger.route.cjs"
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3001;
const app = express();
app.use(express.json());

app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/news", newsRoute);
app.use("/doc", swaggerRoute);

connectDatabase();
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
