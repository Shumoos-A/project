// models/order.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./user");

const Order = sequelize.define("Order", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  // الاسم صاحب الطلب (قد يكون مكررًا مع user.name، لكن مفيد إذا أراد المستخدم كتابة اسم مختلف)
  customerName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // طريقة الدفع: cod = الدفع عند الاستلام، zaincash = بطاقة/زين كاش
  paymentMethod: {
    type: DataTypes.ENUM("cod", "zaincash"),
    allowNull: false,
  },
  // حالة الطلب البسيطة
  status: {
    type: DataTypes.ENUM("pending", "processing", "completed", "cancelled"),
    defaultValue: "pending",
  },
  // يمكنك إضافة حقل للـ items أو total لاحقًا حسب حاجتك
}, {
  timestamps: true,
});

// علاقة Order بـ User (منشئ الطلب)
User.hasMany(Order, { foreignKey: "userId", onDelete: "CASCADE" });
Order.belongsTo(User, { foreignKey: "userId" });

module.exports = Order;
