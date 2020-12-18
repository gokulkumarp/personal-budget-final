let url = 'mongodb://localhost:27017/final_budget'


let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
const compression = require("compression");



const budgetRoute = require('./routes/budget')
const expenseRoute = require('./routes/expense')
const authRoute = require('./routes/auth');

const { authToken } = require('./controllers/auth');

require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose
  .connect(url, {
    useNewUrlParser: true
}).then(() => {
    console.log('Database connected sucessfully !')
},
    error => {
        console.log('Database could not be connected : ' + error)
    }
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
//gzip compression
app.use(compression());

app.use('/api/budget',authToken, budgetRoute)
app.use('/api/expense',authToken, expenseRoute)
app.use('/api/auth', authRoute);

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

