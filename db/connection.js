const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose
    .connect(url, {
      readPreference: "primary",
      authMechanism: "SCRAM",
      readPreferenceTags: { dc: "ny", rack: "r1" },
      retryWrites: true,
      retryReads: true,
    })
    .then(() => {
      console.log("StoreAPI App is connected to the Database!");
    })
    .catch((err) => {
      console.error("Error connecting to the Database", err);
    });
};

module.exports = connectDB;
