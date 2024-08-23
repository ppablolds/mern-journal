const express = require("express");
const userRoute = require("./routes/user.route");
const app = express();

app.use("/", userRoute);

app.listen(3001);
