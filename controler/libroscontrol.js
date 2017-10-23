
var flag = 0;
var autores = [];
var libros = [
	{
		id: '101',
		titulo: "codigo da vinci",
		autor: "dan brown",
		anio: "2010",
		genero: "novela"
	},
	{	
		id: '102',
		titulo: "relatos de un viejo",
		autor: "charles bukowski",
		anio: "2010",
		genero: "relatos"
	},

		{	
		id: '103',
		titulo: "cartero",
		autor: "charles bukowski",
		anio: "1971",
		genero: "novela"
	},

		{	
		id: '104',
		titulo: "algoritmos",
		autor: "cormen",
		anio: "2009",
		genero: "academico"
	}
];


exports.getLibros = function(req,res,next){
	console.log('Get /libros');
	res.status(200).jsonp(libros);
};

exports.addLibro = function(req,res,next){
	//req.body trae la informacion del post
	console.log('Post /libros');
	libros.push(req.body);
	res.status(200).jsonp(libros);
}

exports.getById = function(req,res,next){
	console.log('GET /libros/:id');
	console.log(req.params.id);
	flag = 0;
	for(var i in libros)
	{
	if(libros[i].id == req.params.id)
		{
		var flag = 1
		res.status(200).jsonp(libros[i]);
		}
	}
	if(flag == 0)
	{	
		error = ['Error Id not found'];
		res.status(404).jsonp(error);
	}
	
}

exports.updateLibro = function(req,res,next){
	console.log('PUT /libros/:id');
	console.log(req.params.id);
	console.log(req.body);
	flag = 0;
	for(var i in libros)
	{
	if(libros[i].id== req.params.id)
		{
		libros[i] = req.body;
		var flag = 1;
		}
	}
	if(flag == 1)
		res.status(200).jsonp(libros);
	else
		error = ['Error Id not found'];
		res.status(404).jsonp(error);
}

exports.deleteLibro = function(req,res,next){
	console.log('Delete /libros/:id');
	console.log(req.params.id);
	flag = 0;
	for(var i in libros)
	{
		if(libros[i].id== req.params.id)
		{	
		libros[i] = 'vacio' ;
		var flag = 1;
		}
	}
	if(flag == 1)
		res.status(200).jsonp(libros);
	else
		error = ['Error Id not found'];
		res.status(404).jsonp(error);
}

exports.getAutores = function(req,res,next){
	console.log('Get /autores');
	for(var i in libros)
	{
	console.log('for '+i+' libroautor='+libros[i].autor);
	autores[i] = libros[i].autor
	}
	res.status(200).jsonp(autores);
}

exports.getNombre = function(req,res,next){
	console.log('Get /autores/:nombre');
	console.log(req.params.nombre);
	var autoreslib =[];
	flag = 0;
	for(var i in libros)
	{
	if(libros[i].autor.toLowerCase() == req.params.nombre.toLowerCase())
		{
		autoreslib[i] = libros[i]
		var flag = 1;
		}
	}
	if(flag == 0){
		error = ['Error no se encuentra el nombre del autor'];
		res.status(404).jsonp(error);
	}
	else{
		res.status(200).jsonp(autoreslib);
	}
}

exports.updateAutor = function(req,res,next){
	console.log('PUT /autores/:nombre');
	console.log(req.params.nombre);
	console.log(req.body);
	var autoreslib =[];
	flag = 0;
	for(var i in libros)
	{
	console.log('for '+i+' libroautor='+libros[i].autor +' bodyautor=' +req.body.autor);
	if(libros[i].autor.toLowerCase() == req.params.nombre.toLowerCase())
		libros[i].autor = req.body.autor;
		autoreslib[i] = libros[i]
		var flag = 1;
		}
		if(flag == 0)
		res.status(404).send('Not Found');
		else
		res.status(200).jsonp(autoreslib);


}

exports.deleteAutor = function(req,res,next){
	console.log('Delete /autores/:nombre');
	console.log(req.params.nombre);
	flag = 0;
	for(var i in libros)
	{
		if(libros[i].autor == req.params.nombre)
		{	
		libros[i] = 'vacio' ;
		var flag = 1;
		}
	}
	if(flag == 1)
		res.status(200).jsonp(libros);
	else{
		error = ['Error Autor no encontrado'];
		res.status(404).jsonp(error);
		}
}