const mongoose = require("mongoose");
const DBlink = process.env.MONGO_URI;

const dbConnect = async () => {
  await mongoose.connect(DBlink, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "busBooker"
  });
};

dbConnect();

const db = mongoose.connection;

db.on("error", error => {
  console.log("MongoDB Connection error");
  console.error(error);
});

db.once("open", () => {
  console.log("db connected");
});
