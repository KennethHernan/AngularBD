const express = require('express');
const app = express();
const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
var routes = require('../backend/routes/routes');


app.listen(3000,function check(err)
{
    if(err)
        console.log('Error');
    else
    console.log('Started');
});

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://Kenneth18:Kenneth18@cluster0.ec6oldx.mongodb.net/Angular_K?retryWrites=true&w=majority');
            console.log('MongoDB conectado...');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1);
    }
};
connectDB();

app.use(express.json());
app.use(routes);
