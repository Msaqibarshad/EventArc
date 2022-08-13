const mongoose = require("mongoose");

const connection = async (username,password) => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.2fbvlfz.mongodb.net/eventarcdb?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {});
    console.log("EVENTARC databse connected successfully.");
  } catch (error) {
    console.log("Error while connecting with the database", error);
  }
};

module.exports = connection;
