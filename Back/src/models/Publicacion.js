const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define(
        "Publicacion",
       { id_trabajo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          titulo: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          descripcion: {
            type: DataTypes.TEXT,
            allowNull: false,
          },
          ubicacion: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          salario: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
          },
        }
    )

}