const express = require('express');
const cors = require('cors');
const sequelize = require('../util/database');

sequelize.sync();

const app = express();

app.use(express.json());
app.use(cors());

const port = 3000 || process.env.PORT;

app.get('/', (req, res) => {
    res.send('I am working');
})

require('./routes/customer')(app);

app.listen(port, () => {
    console.log(`serve is runing on port ${port}`);
})
