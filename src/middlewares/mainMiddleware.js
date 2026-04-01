const logger = require('./logginMiddleware')
const errorHandler = require('./errorHandlerMiddleware')
const autenticar = require('./authMiddlewares')
const validarContentType = require('./contentTypeMiddleware')
module.exports = {logger, errorHandler, autenticar, validarContentType}