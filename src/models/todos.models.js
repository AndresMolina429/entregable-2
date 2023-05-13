const db = require('../utils/databases')
const { DataTypes } = require('sequelize');

const Todos = db.define(
    'Todos',
     {
       id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
       },
       title:{
        type: DataTypes.STRING,
        allowNull: false,
       },
       description: {
        type: DataTypes.STRING,
        allowNull: false
       },
       completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
       }
     }
     );

module.exports = Todos;