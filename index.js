const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
//Models
const BookModel = require("./model/book_model");

// Run server database
require('./config/db');

// Middleware to parse JSON data from the request body
app.use(bodyParser.json());
// Middleware to parse URL-encoded data from the request body
app.use(bodyParser.urlencoded({ extended: true}));

// Model Book


// Route get to home url
app.get('/', (req ,res) => {
    res.send('Hello World');
    console.info('Hello World');
})

//Route get to /books url
app.get('/books', async (req , res) => {
    try {
        const result = await BookModel.find();
        console.log(result);
        res.json(result);
    }catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

// Route get to /books/:id url
app.get('/books/:id', async (req ,res) => {
    try {
        const result =  await BookModel.findOne({_id:req.params.id});
        console.log(result);
        res.json(result)
    }catch (err) {
        console.error(err.messsage);
        res.status(500).send('Server error');
    }
})

// Route post to save new book document
app.post('/books', async (req ,res) => {
    const newBookModel =  new BookModel();
    newBookModel.title = req.body.title;
    newBookModel.auhtor = req.body.author;
    newBookModel.category = req.body.category;

    try {
        const result = await newBookModel.save();
        console.info(result);
        res.status(200).send(result);
    }catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

// Route post to save book document v2
app.post('/books_v2', async (req ,res) => {
    try {
        const result = await BookModel.create(req.body);
        console.info(result);
        res.status(200).send(result); 
    }catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})


app.listen(port, () => {
    console.info(`Server is running on port ${port}`);
})