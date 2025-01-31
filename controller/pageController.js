const Photo = require("../model/Photos")
const fileUpload = require('express-fileupload');
const fs = require("fs")

exports.getIndexPage = async(req,res)=>{
    res.render("index")
}
exports.getAddPage  = async(req,res)=>{
    res.render("add")
}
exports.addPhotos = async(req,res)=>{

    const uploadDir = 'public/uploads';

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

    uploadPhoto = req.files.photo;
    uploadPath = __dirname + '/public/uploads' + uploadPhoto.name;
    
    // const photos = await Photo.create(req.body)
    uploadPhoto.mv(uploadPath, async()=>{
        await Photo.create({
            ...req.body,
            image: '/uploads/' + uploadPhoto.name
        })
    })


    res.status(200).redirect("/")
}