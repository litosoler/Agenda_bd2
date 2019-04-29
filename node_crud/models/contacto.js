
let mongoose = require('./../config/conexion');
let Schema = mongoose.Schema;

let schema = new Schema({
    nombres: String,
    apellidos: String,
    identidad: String,
    rtn: String,
    tipoPersona: String,
    tipoUsuario: String,
    direcciones: [{ id: Number, descripcion: String }],
    telefonos: [{ numero: Number, direccion: String }],
    fechas: [{ fecha: String, descripcion: String }],
    contactosAsociados: [String]
}, { versionKey: false });

let Contacto = mongoose.model('contactos', schema);

module.exports = Contacto;




/*
id: { type: String },
    apellidos: { type: String },
    identidad: { type: String },
    rtn: { type: String },
    direcciones: [
        {
            id: { type: String},
            descripcion: { type: String},
            tipo: { type: String}
        }
    ],
    telefonos: [
        {
            numero: String,
            direccione: {type: String},
        }
    ],
    tipo: { type: String },
    fechas: [
        {
            fecha: { type: String},
            descripcion: { type: String}
        }
    ],
    contactosAsociados: [],
    tipoUsuario: { type: String}
*/