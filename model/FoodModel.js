const mongoose = require("mongoose");

const foodSchema = mongoose.Schema({
  category: "string",
  Bg: "number",
  sub: [
    {
      name: "string",
      detail: "string",
      Imgg: "string",
      price: "number",
      amount: "number",
      nutraints: [
        {
          Name: "string",
          value: "number",
        },
        {
          Name: "string",
          value: "number",
        },
        {
          Name: "string",
          value: "number",
        },
      ],
      Ingridiants: [
        {
          Name: "string",
          Img: "string",
        },
        {
          Name: "string",
          Img: "string",
        },
        {
          Name: "string",
          Img: "string",
        },
        {
          Name: "string",
          Img: "string",
        },
      ],
    },
  ],
  Img: "string",
});

const Food = mongoose.model("food", foodSchema);
module.exports = Food;
