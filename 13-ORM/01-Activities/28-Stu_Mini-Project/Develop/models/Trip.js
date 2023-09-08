const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { model, databaseVersion } = require('../../../25-Ins_Literals/config/connection');

class Trip extends Model {}

Trip.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
// add here budget ammount etc.
        traveller_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'traveller',
                key: 'id',
                unique: false
            }
        }
// add here (location id)
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "trip",
    }
);

module.exports = Trip
