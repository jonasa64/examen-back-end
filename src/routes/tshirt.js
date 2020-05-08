
module.exports = app => {
    const express = require('express');
   // var cors = require('cors');

    const shirtController = require('../controllers/tshirt');
  /*  app.all('/', function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
    });*/

    const router = express.Router();

    router.get('/', shirtController.findAll);

    router.get('/:id', shirtController.findById);

    router.post('/', shirtController.create);

    router.put('/:id', shirtController.update);

    router.delete('/:id', shirtController.delete);

    app.use('/shirts', router);
}
