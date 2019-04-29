let mongoose = require('mongoose');

mongoose.connect('mongodb://agendabd2:asd.456@den1.mongo1.gear.host:27001/agendabd2', { useNewUrlParser: true }); 


let db = mongoose.connection;
db.on('error', console.error.bind(console, 'conection to the database: error'));
db.once('open', console.log.bind(console, 'conection to the database: succes'));

module.exports = mongoose;