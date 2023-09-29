const { pool } = require('../config/databases')

//Get
const getAllForm = async () => {
    const connection = await pool.getConnection()
    const [form] = await connection.query('SELECT * FROM form')
    return form
}

//Post
const createForm = async (form) => {
    const connection = await pool.getConnection()
    const [createdForm] = await connection.query('INSERT INTO form (name, email, message) VALUE (?, ?, ?)',
    [form.name, form.email, form.message]);
    return createdForm;
}

module.exports =  { createForm, getAllForm }