const express = require("express");
const connectDatabase = require("./src/database/database");
const userRoute = require("./src/routes/user.route");

const port = 300;
const app = express();

connectDatabase();
app.use(express.json());
app.use("/user", userRoute);

app.listen(port, () => console.log(`Server running on port: ${port}`));

