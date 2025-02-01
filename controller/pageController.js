const Photo = require("../model/Photos")
const fileUpload = require('express-fileupload');
const fs = require("fs")

exports.getIndexPage = async(req,res)=>{
    const photos = await Photo.find()
    res.render("index",{
        photos
    })
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
    uploadPath = __dirname + '/../public/uploads/' + uploadPhoto.name;
    
    
    uploadPhoto.mv(uploadPath, async()=>{
        await Photo.create({
            ...req.body,
            image: '/uploads/' + uploadPhoto.name
        })
    })


    res.status(200).redirect("/")
}
exports.editPage = async(req,res)=>{
    const photo = await Photo.findOne({_id:req.params.id})

    res.status(200).render("edit",{
        photo
    })
}