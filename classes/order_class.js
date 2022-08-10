const { Order } = require('./../models/order');
const { MainClass } =require('./main_class');

class OrderClass extends MainClass{
    constructor(){
        let Schema = Order;
        super(Schema);
    }
}

module.exports.OrderClass = OrderClass;