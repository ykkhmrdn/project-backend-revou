const { pool } = require('../config/databases')

//Get
const getAllAbout = async () => {
    const connection = await pool.getConnection()
    const [about] = await connection.query('SELECT * FROM team_members')
    return about
}

module.exports = { getAllAbout }