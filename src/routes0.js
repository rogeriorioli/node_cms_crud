const express = require('express'),
      routes = express.Router(),
      PortifolioController = require('../src/controllers/PortifolioController'),
      PostController = require('../src/controllers/PostController')



//Portifolio
routes.get('/portifolios' , PortifolioController.index)
routes.get('/portifolio/:id' , PortifolioController.show)
routes.get('/portifolio/:id/:slug' , PortifolioController.show)
routes.post('/portifolio' , PortifolioController.store)
routes.put('/portifolio/:id' , PortifolioController.update)
routes.delete('/portifolio/:id' , PortifolioController.destroy)

//Post
routes.get('/posts' , PostController.index)
routes.get('/post/:id' , PostController.show)
routes.get('/post/:id/:slug' , PostController.show)
routes.post('/post' , PostController.store)
routes.put('/post/:id' , PostController.update)
routes.delete('/post/:id' , PostController.destroy)



module.exports = routes