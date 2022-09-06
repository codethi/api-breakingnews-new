const express = require("express");
const connectDatabase = require("./database/database");
const userRoute = require("./routes/user.route");

const port = 3000;
const app = express();

connectDatabase();
app.use(express.json());
app.use("/user", userRoute);

app.listen(port, () => console.log(`Server running on port: ${port}`));

