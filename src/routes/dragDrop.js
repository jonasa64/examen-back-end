module.exports = app => {
    const  dragDropController = require('../controllers/dragDrop');
    const  express = require('express');
    const router = express.Router();

    app.all('/', function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
    });
    router.get('/', dragDropController.findAll);

    router.post('/', dragDropController.create);

    router.put('/:id', dragDropController.update);

    router.delete('/:id', dragDropController.delete);

    router.get('/:id', dragDropController.findById);

    router.get('/consequence', dragDropController.findAllConsequences);

    router.get('/solution', dragDropController.findAllSolutions)



    app.use('/dragDrop', router);
}
