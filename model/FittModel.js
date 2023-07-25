const mongoose = require("mongoose");

const fittSchema = mongoose.Schema(
  {
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
  }

  // { collection: "fittExcersises" }
);
const fittModel = mongoose.model("fittexcersises", fittSchema);
module.exports = fittModel;
