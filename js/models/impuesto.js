import {ReadData} from "../lector.js";

export async function ObtenerImpuestos(){
    
    let arrayJson = [];
    let datos = await ReadData("impuestos")
     
    for (var i = 1; i < datos.length; i++) 
    {
         var linea = datos[i];
         arrayJson.push({
            id: Number(linea[0]),
            identificador: linea[1],
            valor: Number(linea[2]),
            porcentaje: Number(linea[3]),
            aplicatodos: linea[4],
            idalquileraplica: Number(linea[5]) 
         });
    }
    return arrayJson;
}