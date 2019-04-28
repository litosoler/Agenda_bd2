let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
    id: { type: String },
    nombres: { type: String },
    apellidos: { type: String },
    edad: { type: Number, min: 0 }
}, { versionKey: false });

let Contacto = mongoose.model('Contactos', schema);

module.exports = Contacto;
