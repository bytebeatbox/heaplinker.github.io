const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();
const router = express.Router();

const readFile = (fileName) => {
  const _path = path.resolve(__dirname, "public", fileName);
  return fs.readFileSync(_path, { encoding: "utf-8" });
};

router.get("/", function (req, res) {
  res.status(200).send(readFile("index"));
});

app.use("/", router);
app.use(express.static(path.resolve(__dirname, "public")));
app.listen(process.env.port || 3000);
