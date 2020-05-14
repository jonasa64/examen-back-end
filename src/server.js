const express = require('express');
const cors = require('cors');
const sequelize = require('../util/database');
const Order = require('./models/Order');
const orderDetails = require('./models/OrderDeatils');
const Customer = require('./models/Customer');
const Quiz = require('./models/Quiz');
const Answer = require('./models/Answer');

Customer.hasMany(Order);
Order.belongsTo(Customer);
Order.hasMany(orderDetails);
orderDetails.belongsTo(Order, {constraints: true, onDelete: 'CASCADE'})
Quiz.hasMany(Answer);
Answer.belongsTo(Quiz, {constraints: true, onDelete: 'CASCADE'});

sequelize.sync();

const app = express();

app.use(express.json());
app.use(cors());

const port = 3000 || process.env.PORT;

app.get('/', (req, res) => {
    res.send('I am working');
})

require('./routes/dragDrop')(app);
require('./routes/customer')(app);
require('./routes/tshirt')(app);
require('./routes/order')(app);
require('./routes/quiz')(app)

app.listen(port, () => {
    console.log(`serve is runing on port ${port}`);
})
