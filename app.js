const express = require('express');
const app = express();
const studentData = require('./api/router.js');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { urlencoded } = require('express');



mongoose.connect('mongodb+srv://israrkhanuet:12345@cluster0.oym3a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
mongoose.connection.on('error',error => {
    console.log('Error while connecting mongodb')
});
mongoose.connection.on('connected',connect=> {
    console.log('Mongodb connected successfully')
});

app.use('bodyParser', urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/student',studentData) ;

app.use((req,res,next) => {
    res.status(404).json({
        msg:'The url is not found dear'
    })
})


module.exports = app ;