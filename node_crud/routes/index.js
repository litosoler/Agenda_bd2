let express = require('express');
let router = express.Router();
let Contacto = require('./../models/contacto');

router.get('/', (req, res, next) => {
  res.render('index', { 
      personas: [
        { nombres: 'Julio', apellidos: 'Sandoval', edad: 95}
      ],  
  });

  // Contacto.find((err, personas) => {
  //   console.log(personas);
  //   if (err) throw err;
  //   // res.send(personas);
  //   res.render('index', { personas: personas });
  // });
});
/*
router.get('/nav', (req, res, next) => {
  res.render('index');
});
*/
router.get('/contacto/nuevo', (req, res, next) => {
  //res.send('personaForm', {});
});

router.get('/contacto/editar/:id', (req, res, next) => {
  let idPersona = req.params.id;  
  Contacto.findOne({_id: idPersona }, (err, persona) => {
    if (err) throw err;
    res.send('personaForm', { persona: persona });
  });
});

router.get('/contacto/eliminar/:id', (req, res, next) => {
  // let idPersona = req.params.id;

  // Contacto.remove({_id: idPersona }, (err) => {
  //   if (err) throw err;
  //   res.redirect('/');
  // });
});

router.post('/contacto/crear', (req, res, next) => {
  if (req.body._id === "") {
    let per = new Contacto({
      nombres: req.body.nombre,
      apellidos: req.body.apellido,
      edad: req.body.edad
    });
    per.save();
  } else {    
    Contacto.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true }, (err, model) => {
      if (err) throw err;
    });
  }
  res.send(req.body);
  // res.redirect('/');
});


module.exports = router;
