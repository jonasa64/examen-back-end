module.exports = app => {
    const  quizController = require('../controllers/quiz');
    const  express = require('express');
    const router = express.Router();

    router.post('/', quizController.create);

    router.delete('/:id', quizController.delete);

    router.put('/:id', quizController.update);

    router.get('/', quizController.findAll);

    router.get('/order/:id', quizController.findById);


    app.use('/quiz', router);
}
