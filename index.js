const express = require('express');
const routes = require('./src/routes/indexRoute');

const app = express();

app.use(express.json());
app.use(routes);


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Endereço: http://localhost:${PORT}`);
});