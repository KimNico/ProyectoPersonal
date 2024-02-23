const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define(
        "post",
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            titulo:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            descripcion:{
                type: DataTypes.STRING,
                allowNull: false,

            },
            empresa:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            fecha_publicacion:{
                type: DataTypes.DATE,
                allowNull:false,
            },
            postulaciones:{
                type: DataTypes.INTEGER,
                allowNull:true,
            }
        }
    )

}