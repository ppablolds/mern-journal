import mongoose from "mongoose";

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("banco de dados conectado com sucesso."))
    .catch(() => console.log("banco de dados não conectado."));
};

export default connectDatabase;
