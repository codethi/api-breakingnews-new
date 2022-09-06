import mongoose from "mongoose";

const connectDatabase = () => {
  console.log("Wait connecting to the database...");

  mongoose
    .connect(
      "mongodb+srv://root:root@cluster0.cbphb.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("MongoDB Atlas Connected!"))
    .catch((err) => console.log(`Error connecting to MongoDB Atlas: ${err}`));
};

export default connectDatabase;
