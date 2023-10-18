const express = require('express');
const path = require('path');
const cors = require('cors');
const connectMongo = require('./db/mongoose');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

require('express-async-errors');


const app = express();
const port = process.env.PORT || 3000;

const taskRoutes = require('./routes/task_route');
const globalError = require('./middleware/error-handler');
const notFound = require('./middleware/not-found');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, '../client')));

//connect route
app.get('/', (req,res) => res.redirect('/tasks'));
app.use('/tasks', taskRoutes);

app.use(notFound)
app.use(globalError)

const startServer = async () => {
    try {
        await connectMongo();
        app.listen(port, () => {
            console.log(`listen to ${port}`)
        })
    } catch (error) {
        console.log(error);
    }
}

startServer();
