const express = require("express"),
  path = require("path"),
  app = express();

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;
let build = process.env.NODE_ENV == "development" ? "dist" : "build";
console.log(
  `${process.env.NODE_ENV == "development" ? "Dev" : "Production"} build`
);

app.use("/", express.static(path.join(__dirname, build)));

//run server on port 3000
app.listen(port, () => {
  console.log(`app listening at port ${port}`);
});
