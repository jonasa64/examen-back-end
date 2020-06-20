module.exports = app => {
    const  leaderbord = require('../controllers/leaderbord');
    const  express = require('express');
    const router = express.Router();

    router.post('/dragdrop', leaderbord.addDragDrop);

    router.post('/quiz', leaderbord.addQuiz);

    router.get('/dragdrop', leaderbord.getDragDropLeaderbord);

    router.get('/quiz', leaderbord.getQuizLeaderbord)



    app.use('/leaderbord', router);
}
