// roues for quiz

module.exports = app => {
    const  quizController = require('../controllers/quiz');
    const  express = require('express');
    const router = express.Router();

    app.all('/', function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
    });

    router.post('/', quizController.create);

    router.delete('/:id', quizController.delete);

    router.put('/:id', quizController.update);

    router.get('/', quizController.findAll);

    router.get('/:id', quizController.findById);


    app.use('/quiz', router);
}
