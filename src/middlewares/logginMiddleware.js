const logger = (req, res, next) => {
    const timestamp = new Date().toString();
    const metodo = req.method;
    const url = req.url;

    console.log(`Biblioteca ${timestamp} ${metodo} ${url}`);

    next();
};

module.exports = logger;