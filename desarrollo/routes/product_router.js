const express = require("express");
const app = express();
const Router = express.Router();
const product_controller = require("../controllers/product_controller");
/*
===================================================================================================
===================================================================================================
*/
Router.get("/product", product_controller.product);

module.exports = Router;
