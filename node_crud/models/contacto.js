
let mongoose = require('./../config/conexion');
let Schema = mongoose.Schema;

let schema = new Schema({
    id: String,
    apellidos: String,
    identidad: String,
    rtn:  String ,
    direcciones: [
        {
            id: String,
            descripcion: String,
            tipo: String
        }
    ],
    telefonos: [
        {
            numero: String,
            direccione: String, 
        }
    ],
    tipo: String,
    fechas: [
        {
            fecha: String,
            descripcion: String
        }
    ],
    contactosAsociados: [],
    tipoUsuario: String 
}, { versionKey: false });

let Contacto = mongoose.model('contactos', schema);

module.exports = Contacto;




// las dejo aqui por si se requiere o por si jos equivocamos
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