const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const rootRouter = require("./routes/index");
const app= express();

app.use(cors())
app.use(express.json());
app.use("/api/v1", rootRouter);


const url = "mongodb+srv://rocksam0912:STkmM0E7gxE9iiLc@cluster0.y8axgot.mongodb.net/"
mongoose
.connect(url)
.then(() => {
  console.log("connection successful");
})
.catch((err) => console.log(err));


app.listen(4500)
