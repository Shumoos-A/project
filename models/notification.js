// models/notification.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./user");

const Notification = sequelize.define("Notification", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  read: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  // يمكنك إضافة حقل type إذا رغبت (info, warning, order, ...)
  type: {
    type: DataTypes.STRING,
    defaultValue: "info",
  },
}, {
  timestamps: true,
});

// علاقة Notification بالمستخدم المستلم
User.hasMany(Notification, { foreignKey: "userId", onDelete: "CASCADE" });
Notification.belongsTo(User, { foreignKey: "userId" });

module.exports = Notification;
