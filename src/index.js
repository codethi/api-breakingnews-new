import express from "express";
import connectDatabase from "./database/database.js";
import userRoute from "./routes/user.route.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

connectDatabase();
app.use(express.json());
app.use("/user", userRoute);

app.listen(port, () => console.log(`Server running on port: ${port}`));
