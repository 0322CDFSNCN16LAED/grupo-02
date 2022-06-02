const path = require("path");
const express = require("express");
const productos = require("../productos");

module.exports = {
  home: (req, res) => {
    res.render("index", {
      productos: productos,
    });
  },
  login: (req, res) => {
    res.render("login");
  },
  register: (req, res) => {
    res.render("register");
  },
  product: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/producto.html"));
  },
  cart: (req, res) => {
    res.render("compras");
  },
};