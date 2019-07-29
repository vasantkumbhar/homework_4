let express = require("express");
let db = require("./json-server");
const app = express();

exports.appConst = {
  app,
  db
};
