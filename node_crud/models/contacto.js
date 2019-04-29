
let mongoose = require('./../config/conexion');
let Schema = mongoose.Schema;

let schema = new Schema({
    nombres: String,
    apellidos: String,
    identidad: String,
    rtn: String,
    tipoPersona: String,
    tipoUsuario: String,
    direcciones: [{id: Number, descripcion: String}],
    telefonos: [{numero: Number, direccion: String}],
    fechas: [{fecha:String, descripcion: String}],
    contactosAsociados: [String] 
}, { versionKey: false });

let Contacto = mongoose.model('contactos', schema);

module.exports = Contacto;
