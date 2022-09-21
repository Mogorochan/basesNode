const saludar = ( nombre ) =>{
    return `Saludos ${nombre}`; 
}
//console.log(saludar('Hello, it´s me!'))

//acontinuación se va a hacer un ejercicio de ciclado

console.log('start');

setTimeout(() => {
    console.log('1');
}, 3000);

setTimeout(() => {
    console.log('2');
}, 0);

setTimeout(() => {
    console.log('3');
}, 0);


console.log('finish');