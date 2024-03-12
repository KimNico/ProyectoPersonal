const { DataTypes,Sequelize } = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define(
        "Aplicacion",
        {
            id_aplicacion: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
              },
              fecha_aplicacion: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW,
              },
              estado_aplicacion: {
                type: DataTypes.ENUM('pendiente', 'aceptada', 'rechazada'),
                allowNull: false,
                defaultValue: 'pendiente',
              },
             
        }
    )

}