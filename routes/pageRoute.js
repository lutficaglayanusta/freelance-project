const express = require("express")
const pageController = require("../controller/pageController")

const router = express.Router()

router.get("/",pageController.getIndexPage)
router.get("/add",pageController.getAddPage)
router.post("/photos",pageController.addPhotos)
router.get("/edit/:id",pageController.editPage)

module.exports = router