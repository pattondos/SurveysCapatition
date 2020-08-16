if (process.env.NODE_ENV === 'production') {
    //Estamos en produccion, envía las claves de producción prro
    module.exports = require('./prod');
} else {
    //Estamos en test, envía las claves de desarrollo prro
    module.exports = require('./dev');
}