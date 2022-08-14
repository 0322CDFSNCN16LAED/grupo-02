module.exports = (sequelize, dataTypes) => {
  let alias = "usuarios";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: dataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    domicilio: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    ciudad: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    imagen: {
      type: dataTypes.STRING,
    },
    idUsuarioCategorias: dataTypes.INTEGER,
  };

  let config = {
    tableName: "usuarios",
    timestamps: true,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
    deletedAt: "deletedAt",
  };

  const Usuario = sequelize.define(alias, cols, config);

  Usuario.associate = function (models) {
    Usuario.belongsTo(models.usuario_categorias, {
      foreignKey: "idUsuarioCategorias",
      as: "idCategorias",
    });
  };

  return Usuario;
};
