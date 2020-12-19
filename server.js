let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
const compression = require("compression");
let path = require("path");



const budgetRoute = require('./routes/budget')
const expenseRoute = require('./routes/expense')
const authRoute = require('./routes/auth');

const { authToken } = require('./controllers/auth');

require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGO_DB, {
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


if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get("*", (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}
app.use(express.static("public"));
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

