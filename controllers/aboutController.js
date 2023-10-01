const { aboutService } = require('../services');

async function getTeam(req, res) {
  const about = await aboutService.getAllTeam();

   res.status(200).json(about);
 }

 module.exports = {
   getTeam
 };