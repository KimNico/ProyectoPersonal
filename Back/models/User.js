const { DataTypes, DATE } = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define(
        "user",
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nombre:{
                type: DataTypes.STRING,
                allowNull:false,
            },
            apellido:{
                type: DataTypes.STRING,
                allowNull:false,
            },
            pw:{
                type: DataTypes.STRING,
                allowNull:false,
            },
            mail:{
                type: DataTypes.STRING,
                allowNull:false,
                unique:true,
            },
            foto:{
                type: DataTypes.STRING(500),
                allowNull: true,
            },
            cv:{
                type: DataTypes.STRING,
                allowNull:true,
            }
        }
    )

}