import mongoose from "mongoose";

var schema = new mongoose.Schema({
    users: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        require: true
      
    }
})
const bookdb = mongoose.model('bookdb', schema)
export default bookdb;