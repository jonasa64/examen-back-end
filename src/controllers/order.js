const order = require('../models/Order');
const orderDetails = require('../models/OrderDeatils');
const Customer = require('../models/Customer');
const shirt = require('../models/Tshirt');
//create new order
exports.create = async (req, res) => {
    try {

        const newOrder = await order.create({
            total_price: req.body.totalPrice,
            customerCId: req.body.customerId
        });
        let key = 'orderId';
        req.body.od.map((el, index) => {
            el[key] = newOrder.id;
        })
        //creates orderdetails
        const od = await
            orderDetails.bulkCreate(
                req.body.od
            );



        if (od) {
            return res.send('order is created');
        }


    } catch (e) {
        res.status(500).send({
            message: e.message || "Some error occuredd while creating the order"
        });
    }


}

//deletes a order
exports.delete = (req, res) => {
    const id = req.params.id;
     
    order.destroy({ where: { id: id } }).then(num => {
        //check if order was found
        if (num == 1) {
            res.send({
                message: "order was deleted successfully!"
            })
        } else {
            res.send({
                message: `Cannot delete order with id=${id}. Maybe shirt was not found!`
            })
        }
    })
        .catch(err => {
            res.status(500).send({
                message: "Could not order shirt with id=" + id
            })
        })
}

//update a order
exports.update = (req, res) => {
    const id = req.params.id;
    order.update({
        order_status: req.body.orderStatus,
        shipping_status: req.body.shippingStatus
    }, {
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Order was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update order with id=${id}. Maybe order was not found or req.body is empty!`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error updating order with id=" + id
        });
    })
}
// find all orders
exports.findAll = (req, res) => {
    order.findAll({ include: [orderDetails, Customer] }).then(orders => {
        res.send(orders);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving shirts"
        });
    })
}


// find one order
exports.findOne = (req, res) => {

    const id = req.params.id;
    order.findByPk(id, { include: [orderDetails, Customer] }).then(order => {
        res.send(order);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving shirts"
        });
    })

}
// find order by user 
exports.findByUserId = (req, res) => {
    const customerId = req.params.customerId;
    order.findAll({ where: { customerCId: customerId }, include: [orderDetails, Customer] }).then(orders => {
        res.send(orders);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving shirts"
        });
    })
}
