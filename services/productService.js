const { prisma } = require('../config/prisma')
async function getAllProducts() {
    try{
        const products = await prisma.product.findMany();

        return products;
    }catch (error) {
        console.error(error);
        throw new Error()
    }
}

module.exports = {
    getAllProducts
}