module.exports = app => {
    const  dragDropController = require('../controllers/dragDrop');
    const  express = require('express');
    const router = express.Router();

    router.get('/', dragDropController.findAll);

    router.post('/', dragDropController.create);

    router.put('/:id', dragDropController.update);

    router.delete('/:id', dragDropController.delete);

    router.get('/:id', dragDropController.findById);



    app.use('/dragDrop', router);
}
