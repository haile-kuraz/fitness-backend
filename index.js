const express = require("express");
const mongoose = require("mongoose");

const fittModel = require("./model/FittModel");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// mongodb://172.17.0.3:27017/fittnes
mongoose
  .connect("mongodb+srv://haile:mongo@alphateam-fitt.qnspoz2.mongodb.net/")
  .then(() => {
    console.log("Connected Sucssfully!!");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(port, () => {
  console.log(`Server is listning to port: ${port} `);
});
app.post("/addfitt", async (req, res) => {
  /*  console.log(req.body);
  res.send(req.body); */
  try {
    const fitt = await fittModel.create(req.body);
    res.status(200).json(fiit);
  } catch (err) {
    console.log(err.message);

    res.status(500).json({ message: err.message });
  }
});

//  to dissplay the all list of fitts
app.get("/showfitts", async (req, res) => {
  try {
    const fiits = await fittModel.find({});
    res.status(200).json(fiits);
  } catch {
    res.status(500).json({ message: error.message });
  }
});

//  to dissplay the fitt by using the id as params

app.get("/showfitts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const fitt = await fittModel.findById(id);
    res.status(200).json(fitt);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// to update a product by using idlocalhost:3000/update/648c2c44ea336ca7ee2c5ba5

app.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const fitt = await fittModel.findByIdAndUpdate(id, req.body);
    if (!fitt) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID ${id}` });
    }
    const Updatedfitt = await fittModel.findById(id);
    res.status(200).json(Updatedfitt);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// to delate the data from db using an ID

app.delete("/delate/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const fitt = await fittModel.findByIdAndDelete(id);
    if (!fitt) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID ${id}` });
    }
    const fitts = fittModel.find({});
    res.status(200).json(fitt);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// to delate all the Documents in the collections

// app.delete("/delateAll", async (req, res) => {
//   try {
//    const fitts = fittModel.deleteMany()
//     const fittds = fittModel.find({});
//     res.status(200).json(fittds);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

app.get("/", (req, res) => {
  res.send("hellow world");
  // res.
  res.end();
});
