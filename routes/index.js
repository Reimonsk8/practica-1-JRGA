var express = require('express');
var router = express.Router();

var multer = require('multer'); //v.0.5
var upload = multer(); // for parsing multipart

var libroscontrol = require('../controler/libroscontrol');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*
router.get('/libros', function(req,res, next){
  res.render('index', { title: 'Libros', saludo:'gen 2017'});	
});

router.post('/libros', function(req,res, next){
  res.status(200).jsonp({nombre:'codigo Da vinci', author:'Dan brown'});
});
*/

router.route('/libros')
	.get(libroscontrol.getLibros)
	.post(upload.array(),libroscontrol.addLibro);

router.route('/libros/:id')
	.get(libroscontrol.getById)
	.put(upload.array(), libroscontrol.updateLibro)
	.delete(libroscontrol.deleteLibro);

router.route('/autores')
	.get(libroscontrol.getAutores); // devolver todos los libros dle autor
router.route('/autores/:nombre')
	.get(libroscontrol.getNombre)//devolver todos los libros del autor
	.put(upload.array(), libroscontrol.updateAutor) // actualozar nombre de autor en lso libros
	.delete(libroscontrol.deleteAutor); // eliminar libros del autor

//Utilizar git, crear una cuenta en github y subir tarea 1
// no subir los node_modules // hacer readme.md

module.exports = router;



