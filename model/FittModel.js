const mongoose = require("mongoose");

const fittSchema = mongoose.Schema({
  exerciseCategoryImage: "String",
  exerciseCategoryName: "String",
  SubExercises: [
    {
      Img: "String",
      V_url: "String",
      Name: "String",
      Details: "String",
    },
  ],
});
const fittModel = mongoose.model("fitt", fittSchema);
module.exports = fittModel;
