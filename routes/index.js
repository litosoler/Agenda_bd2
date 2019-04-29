let express = require('express');
let router = express.Router();
let util = require('./util');
let Contacto = require('./../models/contacto');

router.get('/', (req, res, next) => {
  Contacto.find((err, contactos) => {
    contactos = contactos.map( (contacto) =>{
      return {
        _id: contacto._id,
        nombre: util.joinName(contacto),
        identificacion: contacto.identidad || contacto.rtn || '',
        tipo: contacto.tipoUsuario,
        json: JSON.stringify(contacto, null, 4)
      }
    });
    res.render('index', { contactos});
  });
});
/*
router.get('/nav', (req, res, next) => {
  res.render('index');
});
*/
router.get('/contacto/nuevo', (req, res, next) => {
  res.render('form', {});
});

router.get('/contacto/editar/:id', (req, res, next) => {
  Contacto.findOne({ _id: req.params.id }, (err, contacto) => {
    if (err) throw err;
    contacto = {
      _id: contacto._id,
      nombres: contacto.nombres,
      apellidos: contacto.apellidos,
      identidad: contacto.identidad,
      direcciones: util.convertToString(contacto.direcciones),
      telefonos: util.convertToString(contacto.telefonos),
      fechas: util.convertToString(contacto.fechas),
      contactosAsociados: contacto.contactosAsociados.join(','),
      tipoUsuario: contacto.tipoUsuario,
      rtn: contacto.rtn,
      tipoPersona: contacto.tipoPersona
    }
    res.render('form', { contacto, scripts: ['/js/form.js'], json: JSON.stringify(contacto, null, 4) });
  });
});
router.get('/contacto/ver/:id', (req, res, next) => {
  Contacto.findOne({ _id: req.params.id }, (err, contacto) => {
    if (err) throw err;
    res.render('ver', {_id:contacto._id,json: JSON.stringify(contacto, null, 4)});
  });
});
router.get('/contacto/eliminar/:id', (req, res, next) => {
  Contacto.remove({_id:req.params.id}, (err) => {
    res.redirect('/');
  });
});

router.post('/contacto/crear', (req, res, next) => {
  let contacto = {
    nombres: req.body.nombres,
    apellidos: req.body.apellidos,
    identidad: req.body.identidad,
    rtn: req.body.rtn,
    direcciones: util.convertToJson(req.body.direcciones),
    telefonos: util.convertToJson(req.body.telefonos),
    fechas: util.convertToJson(req.body.fechas),
    contactosAsociados: util.obtenerContactosAsociados(req.body.convertToJson),
    tipoUsuario: req.body.tipoUsuario,
    tipoPersona: req.body.tipoPersona,
  }
  let _contacto;
  if (req.body._id) {
    Contacto.findByIdAndUpdate(req.body._id, { $set: contacto }, { new: true }, (err, model) => {
      res.redirect('/');
    });
  } else {
    _contacto = new Contacto(contacto);
    _contacto.save().then( function(err){
      res.redirect('/');
    });
  }
});


module.exports = router;
