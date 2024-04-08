import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function server() {
  try {
    mongoose.connect(config.database_url_cloud as string);

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
server();
