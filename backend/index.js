const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const rootRouter = require("./routes/index");
const app= express();

app.use(cors())
app.use(express.json());
app.use("/api/v1", rootRouter);


app.listen(process.env.PORT || 4500)
