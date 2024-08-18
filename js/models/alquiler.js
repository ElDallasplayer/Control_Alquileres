import {ReadData} from "../lector.js";
import {ObtenerCobros,ObtenerCobros_ParaAlquiler} from "./cobro.js";

export async function ObtenerAlquileres(){
    
    let arrayJson = [];
    let datos = await ReadData("alquileres")
     
    for (var i = 1; i < datos.length; i++) 
    {
         var linea = datos[i];
         arrayJson.push({
             id: Number(linea[0]),
             nombre: linea[1],
             ultimo_mes_cobrado: await ObtenerUltimoMesCobrado(Number(linea[0])),
             referencia: linea[2],
             inquilino: Number(linea[3]),
             cobrar: Number(linea[4]),
             calleuno: linea[5],
             calledos: linea[6],
         })
    }
    return arrayJson;
}

async function ObtenerUltimoMesCobrado(idAlquiler){
    let cobrosJson = await ObtenerCobros_ParaAlquiler(idAlquiler);
    console.log(cobrosJson)
     if(cobrosJson.length > 0){
         let cobroMayor = cobrosJson.reduce((previous, current) => {
             return current[1] > previous[1] ? current : previous;
           });
         return cobroMayor.mes_nombre;
     }else{
         return "--";
     }
}