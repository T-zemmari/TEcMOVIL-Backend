const Order = require('../Model/Orders');





class OrderController {


    // Obtener todos los usuarios //

    async getAllOrders(orders) {

        return Order.find(orders)
    }
    async getorderByEmail(email) {
        return Order.findOne({ email })
    }

    //Obtener a un usuario mediante su id //

    async getOrderById(id) {

        return Order.findById(id);
    }

    // Guardar a un usuario en la base de datos //

    async CreateOrder(order) {

        return Order.create(order);
    }

    // Modificar o actualizar los datos del usuario.

    async updateOrder(id, order) {
        return Order.findByIdAndUpdate(id, order);
    };

    // Borrar a un usuario de la base de datos //

    async destroy(id) {
        return Order.findByIdAndRemove(id);
    };




}

let orderController = new OrderController();
module.exports = orderController;