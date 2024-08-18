import {ReadData} from "../lector.js";

export async function ObtenerInquilinos(){
    
    let arrayJson = [];
    let datos = await ReadData("inquilinos")
     
    for (var i = 1; i < datos.length; i++) 
    {
         var linea = datos[i];
    }
    console.log(arrayJson)
}