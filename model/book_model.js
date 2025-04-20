const mongoose = require('mongoose');

const Book = mongoose.Schema(
    {
        title: String,
        author: String,
        category: String
    }
)

const BookModel = mongoose.model('Book', Book);

module.exports = BookModel;

//sample data
[
    {    
        title: "React JS",
        author: "John Doe",
        category: "Programming"
    },
    {
        title: "Node JS",
        author: "Jane Doe",
        category: "Programming"
    }
]