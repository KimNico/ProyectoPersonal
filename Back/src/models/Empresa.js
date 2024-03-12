const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define(
        "Empresa",
        {
            id_empresa: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
              },
              nombre_empresa: {
                type: DataTypes.STRING,
                allowNull: false,
              },
              descripcion: {
                type: DataTypes.TEXT,
                allowNull: false,
              },
        }
    )

}