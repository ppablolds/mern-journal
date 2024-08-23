const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(
      "mongodb+srv://root:root@journal.czarj.mongodb.net/?retryWrites=true&w=majority&appName=Journal"
    )
    .then(() => console.log("banco de dados conectado com sucesso."))
    .catch(() => console.log("banco de dados não conectado."));
};

module.exports = connectDatabase;
