const {crearTablas} = require('./helpers/multiplicar')

console.clear();

const base = 9;//manipulo 


crearTablas(base)
try {
    (nombreArchivo => console.log(nombreArchivo, 'creado'));
} catch (error) {
    throw error;
}
   