import bookdb from "../model/book.js";
import Userdb from "../model/user.js";

const book = (req,res)=>{
    Userdb.find()
    .then(users => {
        res.render('addbook.ejs', { users });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "some error occur while retrieving users"
        })
    });
}

const addbook = (req,res)=>{
    if (!req.body) {
        res.status(400).send({ message: "content cannot be empty" })
        return;
    }
    console.log(req.body)

    const book = new bookdb({
        users:req.body.users,
        name: req.body.book,
        author: req.body.author,
        date: req.body.date
    })
    // save book in database
    book
        .save(book)
        .then(data => {
            // res.send(data)
            res.redirect('getbook')
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "some error occur while creating a create operation"
            })
        })
}

const getbook = (req, res) => {
    bookdb.find()
    .then(books => {
        res.render('getbook', { books });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "some error occur while retrieving users"
        })
    });

};


export {book,addbook,getbook} 