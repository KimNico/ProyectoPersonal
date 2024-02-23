const { DataTypes, DATE } = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define(
        "User",
        {
            id_user:{
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
            tipo:{
                type: DataTypes.ENUM('solicitante', 'empleador'),
                allowNull: false,
            }
        }
    )

}