module.exports = function (sequelize, datatypes) {
  const product = sequelize.define(
    "Products",
    {
      nombre: datatypes.STRING,
      precio: datatypes.INTEGER,
      seccion: datatypes.STRING,
      descuento: datatypes.INTEGER,
      descripcion: datatypes.STRING,
      imagen: datatypes.STRING,
      cantidad: datatypes.INTEGER,
    },
    {
      tableName: "productos",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      deletedAt: "deletedAt",
    }
  );
  /* 
  product.associate = (models) => {
    product.belongsTo(models.ProductsCategories, {
      foreignKey: "idProductosCategorias",
      as: "categorie",
    });
  };
  product.associate = (models) => {
    product.belongsTo(models.ProductsCarts, {
      foreignKey: "idProductos",
      as: "carts",
    });
  }; 
  */
  return product;
};
