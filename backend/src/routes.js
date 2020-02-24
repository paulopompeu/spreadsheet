const { Router } = require('express');
const SheetController = require('./controllers/SheetController')

const routes =  Router();

routes.get('/', SheetController.index);
routes.get('/:id', SheetController.search);
routes.post('/', SheetController.store);

module.exports = routes;