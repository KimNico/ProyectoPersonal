const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "Publicacion",
        {
            id_trabajo: {
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
            requisitos: {
                type: DataTypes.JSON,
                allowNull: true,
            },
            beneficios: {
                type: DataTypes.JSON,
                allowNull: true,
            },
            modalidad: {
                type: DataTypes.ENUM('Remoto', 'Presencial', 'Hibrido'),
                allowNull: false,
            },
            id_empresa: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'Empresas', // nombre de la tabla de la empresa
                    key: 'id_empresa', // nombre del campo de la clave primaria en la tabla Empresa
                },
                allowNull: false,
            }
        },
        {
            freezeTableName: true,
        }
    );
};
