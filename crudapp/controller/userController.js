import Userdb from "../model/user.js";

const user =(req,res)=>{
    res.render('../views/index.ejs')
}

const adduser = (req,res)=>{
    if (!req.body) {
        res.status(400).send({ message: "content cannot be empty" })
        return;
    }
    // new user
    const user = new Userdb({
        name: req.body.username,
        email: req.body.email,
        phonenum: req.body.phonenum,
        password: req.body.password
    })

    // save user in database
    user
        .save(user)
        .then(data => {
            res.redirect('getuser')
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "some error occur while creating a create operation"
            })
        })
}

const getuser = (req, res) => {
    Userdb.find()
    .then(users => {
        res.render('getuser', { users });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "some error occur while retrieving users"
        })
    });
};


export {user,adduser,getuser}