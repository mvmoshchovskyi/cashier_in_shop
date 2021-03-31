import {DataTypes}  from 'sequelize'
const sequelize = require('../db')

export const Cashier = sequelize.define('cashier', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING,  allowNull: false },
  surname: { type: DataTypes.STRING,  allowNull: false },
  age: { type: DataTypes.STRING, allowNull: false },
  sex: { type: DataTypes.STRING, allowNull: false },
  expiriense: { type: DataTypes.INTEGER, allowNull: false },
})

export const Shop = sequelize.define('shop', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  brand: { type: DataTypes.STRING, allowNull: false },
  city: { type: DataTypes.STRING, allowNull: false },
  date_open: { type: DataTypes.DATE, allowNull: false }
})

export const CashRegister = sequelize.define('cash_register', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  type_of_work: { type: DataTypes.STRING, allowNull: false },
  time_work_start: { type: DataTypes.TIME, allowNull: false },
  time_work_end: { type: DataTypes.TIME, allowNull: false },
  working_day: { type: DataTypes.STRING, allowNull: false }
})

module.exports = {
  Cashier , Shop, CashRegister
}