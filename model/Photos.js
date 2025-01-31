const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

const Photo = mongoose.model('Photos', PhotoSchema);

module.exports = Photo