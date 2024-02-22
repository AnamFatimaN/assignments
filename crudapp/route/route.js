import express from "express";
const router = express.Router();
import  {user,adduser,getuser}from "../controller/userController.js";
import  {book,addbook,getbook}from "../controller/bookController.js";
// import  {bookM,addbookM,getbookM}from "../controller/bookControllerM.js";
// import  {author,addauthor}from "../controller/authorController.js";
import Userdb from'../model/user.js'



// route to get registration form(user)
router.get('/',user)
// route to submit form data
router.post('/',adduser)
// route to show user data in form of table
router.get('/getuser',getuser)


// route to get book form

router.get('/book',book)
 
// route to submit book form data
router.post('/book',addbook)
// route to get book data inform of table
router.get('/getbook',getbook)

// route to get book form
// router.get('/bookM',bookM)
// route to submit book form data
// router.post('/bookM',addbookM)
// route to get book data inform of table
// router.get('/getbookM',getbookM)

// route to get book form
// router.get('/author',author)
// route to submit book form data
// router.post('/author',addauthor)


export default router