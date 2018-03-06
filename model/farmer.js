
const Sequelize = require('sequelize');
const sequelize = require('../config/config');
const FutureOrder = sequelize.define('future_orders_reject', {
  reject_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    future_order_id: {
      type: Sequelize.INTEGER,
      validate: {
        notNull: true,
      }
    },
    reason_for_reject: Sequelize.STRING
  });
  
  module.exports = FutureOrder;