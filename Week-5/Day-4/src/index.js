#!/bin/node

const { Order, Invoice } = require("./models/index.js");
// DO NOT EDIT CODE ABOVE

// Define your association
// WRITE YOUR CODE HERE
Order.hasOne(Invoice);
Invoice.belongsTo(Order);

async function findInvoice(id) {
    const order = await Order.findByPk(id);
    const invoice = await order.getInvoice();
    return invoice;
}

// DO NOT EDIT CODE BELOW
module.exports = {
  findInvoice,
  Order,
  Invoice,
};