const mongoose = require("mongoose");

const fittSchema = mongoose.Schema({
  _id: ObjectId,
  exerciseCategoryImage: String,
  exerciseCategoryName: String,
  SubExercises: [
    {
      Img: String,
      V_url: String,
      Name: String,
      Details: String,
    },
  ],
});
const fittModel = mongoose.model("fitt", fittSchema);
module.exports = fittModel;
