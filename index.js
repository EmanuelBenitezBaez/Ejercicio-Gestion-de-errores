/*Crea un nuevo proyecto de Node.*/

//- Instala la dependencia Winston

//- En el archivo index.js crea una función que devuelva un error con un mensaje personalizado

//- Registra el error en un archivo a través de un try...catch







const myFunction = valor => {
    if(typeof valor === "number"){
        return 2* valor;
    }"El valor debe ser tipo numerico."
    throw new Error()
}

const numero=8;

try{
console.log("Esta ejecutandose de forma correcta.")
const doble= myFunction(numero);
console.log(doble);
}catch(e){

console.error(e);
console.error("Error !");
}finally{
    console.log("Esto se va a ejecutar tanto si existe o no un error.")
}








