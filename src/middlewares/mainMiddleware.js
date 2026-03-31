const logger = require('./logginMiddleware')
const errorHandler = require('./errorHandlerMiddleware')
const autenticar = require('./authMiddlewares')
module.exports = {logger, errorHandler, autenticar}