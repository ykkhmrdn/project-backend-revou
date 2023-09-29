const { pool } = require('../config/databases')

const getAllProduct = async () => {
    const connection = await pool.getConnection()
    const [product] = await connection.query('SELECT * FROM Products');
    return product
}

module.exports = { getAllProduct }