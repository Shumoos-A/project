// routes/orders.js
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const Order = require("../models/order");
const Notification = require("../models/notification");
const User = require("../models/user");

// إنشاء طلب جديد (مستخدم أو admin يمكنه إنشاء طلب ولكن عادةً المستخدم)
router.post("/", authMiddleware(["user", "admin"]), async (req, res) => {
  try {
    // نتوقع أن الــ frontend يرسل: customerName, address, phone, paymentMethod
    const userId = req.user.id;
    const { customerName, address, phone, paymentMethod } = req.body;

    if (!customerName || !address || !phone || !paymentMethod) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    if (!["cod", "zaincash"].includes(paymentMethod)) {
      return res.status(400).json({ message: "Invalid payment method" });
    }

    // إنشاء الطلب
    const order = await Order.create({
      userId,
      customerName,
      address,
      phone,
      paymentMethod,
      status: "pending",
    });

    // رسائل الإشعار حسب طريقة الدفع (نص عربي كما طلبت)
    let userMessage = "";
    let adminMessage = "";

    if (paymentMethod === "cod") {
      userMessage = "تم استلام طلبك — سيتم مراجعة الطلب والدفع عند التوصيل.";
      adminMessage = `طلب جديد (الدفع عند الاستلام) من المستخدم #${userId} — اسم: ${customerName}, هاتف: ${phone}.`;
    } else if (paymentMethod === "zaincash") {
      userMessage = "تم استلام طلبك — الرجاء إتمام الدفع عبر زين كاش، وسيتم مراجعة الطلب بعد التأكيد.";
      adminMessage = `طلب جديد (دفع زين كاش) من المستخدم #${userId} — اسم: ${customerName}, هاتف: ${phone}.`;
    }

    // إشعار للمستخدم صاحب الطلب
    await Notification.create({
      userId: userId,
      message: userMessage,
      type: "order",
      read: false,
    });

    // إشعار لكل مشرف (admin)
    const admins = await User.findAll({ where: { role: "admin" } });
    for (const admin of admins) {
      await Notification.create({
        userId: admin.id,
        message: adminMessage,
        type: "order",
        read: false,
      });
    }

    return res.status(201).json({ message: "Order created", order });
  } catch (err) {
    console.error("Create order error:", err);
    return res.status(500).json({ message: "Server error", error: err.message });
  }
});

// (اختياري) راوت لجلب إشعارات المستخدم الحالي
router.get("/my-notifications", authMiddleware(["user", "admin"]), async (req, res) => {
  try {
    const notifications = await Notification.findAll({
      where: { userId: req.user.id },
      order: [["createdAt", "DESC"]],
    });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
