const express = require("express");
const app = express();
/*
===================================================================================================
===================================================================================================
*/
const product_controller = {
    product: (req, res) => {
        res.render("product");
    },
};

module.exports = product_controller;
