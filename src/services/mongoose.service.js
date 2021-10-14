const mongoose = require("mongoose");

exports.dbConnect = () => {
  mongoose
    .connect(
      "mongodb+srv://vincent:VZ123456@cluster0.zmorb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("sucessfully connect to database");
    })
    .catch((err) => console.log(err));
};
