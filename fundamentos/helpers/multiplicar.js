const fs = require("node:fs"); //me ayuda a crear documentos

const crearTablas = async (base = 5) => {
  try {
    console.clear();
    console.log("==========");
    console.log("Tabla del", base);
    console.log("==========");

    let salida = "";

    //iteradores
    for (let i = 1; i <= 10; i++) {
      salida += `${base} x ${i} = ${base * i}\n`; //\n salto de línea ``
    }

    console.log(salida);
    //funciones

    fs.writeFileSync(`tabla-${base}.txt`, salida); //el problema es que si sucede un error, hay que usar el try
   
    return `tabla-${base}.txt creado`;

  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearTablas,
};
