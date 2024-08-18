import {ReadData} from "../lector.js";

export async function ObtenerAlquileres(){
    
    let arrayJson = [];
    let datos = await ReadData("alquileres")
     
    for (var i = 1; i < datos.length; i++) 
    {
         var linea = datos[i];
         arrayJson.push({
             id: Number(linea[0]),
             nombre: linea[1],
             referencia: linea[2],
             inquilino: Number(linea[3]),
             cobrar: Number(linea[4]),
             calleuno: linea[5],
             calledos: linea[6],
         })
    }
    return arrayJson;
}