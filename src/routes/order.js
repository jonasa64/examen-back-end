module.exports = app => {
    const  orderController = require('../controllers/order');
    const  express = require('express');
    const router = express.Router();

    router.post('/', orderController.create);

    router.delete('/delete/:id', orderController.delete);

    router.put('/:id', orderController.update);

    router.get('/', orderController.findAll);

    router.get('/:customerId', orderController.findByUserId);

    router.get('/order/:id', orderController.findOne);


    app.use('/orders', router);
}
