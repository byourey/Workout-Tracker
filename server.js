const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
require('dotenv').config();

// Routes
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

const PORT = process.env.PORT || 3000;

const db = require("./models");
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true

});

app.use('/api', apiRoutes);

app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

