let mongoose = require('mongoose');

mongoose.connect('mongodb://agendabd2:asd.456@den1.mongo1.gear.host:27001/agendabd2', { useMongoClient: true }); 
//mongodb://localhost:27017/crud
module.exports = mongoose;