const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    schedule_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "guides",
    },
    traveler: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    }
});

const Order = mongoose.model("orders", OrderSchema);
module.exports.Order = Order;