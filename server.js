const ecpress = require("express");
const logger = require("logger");
const mongoose = require("mongoose");
require('dotenv').config();

// Routes
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3000;

const db = require("./models");
const { urlencoded } = require("body-parser");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
    useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true

});

app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

