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
              cant_empleados:{
                type: DataTypes.INTEGER,
                allowNull: false
              },
              logo:{
                type: DataTypes.STRING(500),
                allowNull: false,
              },
              mail:{
                type: DataTypes.STRING,
                allowNull:false
              },
              pw:{
                type:DataTypes.STRING,
                allowNull:false,
              },
              categoria:{
                type:DataTypes.STRING,
                allowNull:false,
              },
              telefono:{
                type:DataTypes.STRING,
                allowNull:false,
              }
        }
    )
}