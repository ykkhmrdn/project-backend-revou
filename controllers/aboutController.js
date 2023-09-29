const aboutService = require('../services/aboutService')

//Get
const getAllAbout = async (req, res) =>{
    const about = await aboutService.getAllAbout()
    res.status(200).json({
        message: "Sukses Mengambil data about",
        data: about
    })
}

module.exports = { getAllAbout }