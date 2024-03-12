const { DataTypes,Sequelize } = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define(
        "Postulacion",
        {
            id_postulacion: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
              },
              fecha_postulacion: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW,
              },
              estado_postulacion: {
                type: DataTypes.ENUM('pendiente', 'aceptada', 'rechazada'),
                allowNull: false,
                defaultValue: 'pendiente',
              },
             
        }
    )

}