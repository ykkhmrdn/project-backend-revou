const formService = require('../services/formService')
// const { pool } = require('../config/databases')

//Get
const getAllForm = async (req, res) =>{
    const form = await formService.getAllForm()
    res.status(200).json({
        message: "Sukses Mengambil Input form",
        data: form
    })
}
//Post
const createForm =  async(req,res) => {
    const createdForm = await formService.createForm(req.body)
    res.status(201).json({
        message: "Sukses menginput",
        data: createdForm
    })
}

module.exports = { createForm, getAllForm }