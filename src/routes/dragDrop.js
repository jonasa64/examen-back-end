module.exports = app => {
    const  dragDropController = require('../controllers/dragDrop');
    const  express = require('express');
    const router = express.Router();

    router.get('/', dragDropController.findAll);

    router.post('/', dragDropController.create);

    router.put('/:id', dragDropController.update);

    router.delete('/:id', dragDropController.delete);

    router.get('/:id', dragDropController.findById);

    router.get('/consequence', dragDropController.findAllConsequences);

    router.get('/solution', dragDropController.findAllSolutions)



    app.use('/dragDrop', router);
}
