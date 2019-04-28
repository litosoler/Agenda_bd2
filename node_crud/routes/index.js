let express = require('express');
let router = express.Router();

let mongoose = require('./../config/conexion');
let Contacto = require('./../models/contacto');

router.get('/', (req, res, next) => {
  // Contacto.find((err, personas) => {
  //   console.log(personas);
  //   if (err) throw err;
  //   res.send(personas);
  //   //res.render('index', { personas: personas });
  // });
});

router.get('/contacto/nuevo', (req, res, next) => {
  //res.send('personaForm', {});
});

router.get('/contacto/editar/:id', (req, res, next) => {
  //let idPersona = req.params.id;  
  // Contacto.findOne({_id: idPersona }, (err, persona) => {
  //   console.log(persona);
  //   if (err) throw err;
  //   res.send('personaForm', { persona: persona });
  // });
});

router.get('/contacto/eliminar/:id', (req, res, next) => {
  // let idPersona = req.params.id;

  // Contacto.remove({_id: idPersona }, (err) => {
  //   if (err) throw err;
  //   res.redirect('/');
  // });
});

// router.post('/contacto/crear', (req, res, next) => {
//   // console.log(req.body);  

//   // if (req.body._id === "") {
//   //   let per = new Persona({
//   //     nombres: req.body.nombres,
//   //     apellidos: req.body.apellidos,
//   //     edad: req.body.edad
//   //   });
    
//   //   per.save();
//   // } else {    
//   //   console.log(req.body._id);
//   //   Persona.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true }, (err, model) => {
//   //     if (err) throw err;
//   //   });
//   // }
//   // res.redirect('/');
// });


module.exports = router;
