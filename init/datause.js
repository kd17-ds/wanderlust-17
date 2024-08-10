const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main()
  .then((res) => {
    console.log("DATABASE CONNECTED");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

// Added owner of every listing
const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "66b5c76e19358b32c10992d2",
  }));
  await Listing.insertMany(initData.data);
  console.log("Data initialized");
};

initDB();
