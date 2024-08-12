const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Assignment = sequelize.define('Assignment', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  dueDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  teacherId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Assignment
