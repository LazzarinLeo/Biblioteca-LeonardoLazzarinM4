const express = require('express');
const routes = require('./src/routes/indexRoute');
const {logger, errorHandler} = require('./src/middlewares/mainMiddleware');
const app = express();

app.use(express.json());
routes.use(logger);
app.use(routes);
app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Endereço: http://localhost:${PORT}`);
});