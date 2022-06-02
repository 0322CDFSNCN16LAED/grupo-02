const path = require("path");
const express = require("express");

module.exports = {
  home: (req, res) => {
    res.render("index");
  },
  login: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/login.html"));
  },
  register: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/register.html"));
  },
  product: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/producto.html"));
  },
  cart: (req, res) => {
    res.render("compras");
  },
};
