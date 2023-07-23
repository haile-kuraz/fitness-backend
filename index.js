const express = require("express");
const mongoose = require("mongoose");
const foodModel = require("./model/FoodModel");

const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongooses
  .connect("mongodb://172.17.0.2:27017/yamii")
  .then(() => {
    console.log("Connected Sucssfully!!");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(port, () => {
  console.log(`Server is listning to port: ${port} `);
});
app.post("/addfood", async (req, res) => {
  /*  console.log(req.body);
  res.send(req.body); */
  try {
    const food = await foodModel.create(req.body);
    res.status(200).json(food);
  } catch (err) {
    console.log(err.message);

    res.status(500).json({ message: err.message });
  }
});

//  to dissplay the all list of Foods
app.get("/showfoods", async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.status(200).json(foods);
  } catch {
    res.status(500).json({ message: error.message });
  }
});

//  to dissplay the food by using the id as params

app.get("/showfoods/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const food = await foodModel.findById(id);
    res.status(200).json(food);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// to update a product by using idlocalhost:3000/update/648c2c44ea336ca7ee2c5ba5

app.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const food = await foodModel.findByIdAndUpdate(id, req.body);
    if (!food) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID ${id}` });
    }
    const Updatedfood = await foodModel.findById(id);
    res.status(200).json(Updatedfood);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// to delate the data from db using an ID

app.delete("/delate/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const food = await foodModel.findByIdAndDelete(id);
    if (!food) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID ${id}` });
    }
    const foods = foodModel.find({});
    res.status(200).json(food);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// to delate all the Documents in the collections

// app.delete("/delateAll", async (req, res) => {
//   try {
//    const foods = foodModel.deleteMany()
//     const foodds = foodModel.find({});
//     res.status(200).json(foodds);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

app.get("/", (req, res) => {
  res.send("hellow world");
  // res.
  res.end();
});
