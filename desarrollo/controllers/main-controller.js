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
    res.render("product");
  },
  cart: (req, res) => {
    const busqueda = productos.find((art) => {
      return art.id == 14;
    });
    res.render("compras", {
      art: busqueda,
    });
  },
};
