const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define(
        "empresa",
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nombre:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            direccion:{
                type: DataTypes.STRING,
                allowNull: true,
            },
            contacto:{
                type: DataTypes.STRING,
                allowNull:true
            },
            pw:{
                type : DataTypes.STRING,
                allowNull: false,
            }
        }
    )

}