const { prisma } = require('../config/prisma')
async function getAllTeam() {
    try{
        const about = await prisma.team.findMany();

        return about;
    }catch (error) {
        console.error(error);
        throw new Error()
    }
}

module.exports = {
    getAllTeam
}