import {ReadData} from "../lector.js";
import { ObtenerAlquileres } from "./alquiler.js";

export async function ObtenerCobros(){
    let arrayJson = [];
    let datos = await ReadData("cobros")
    for (var i = 1; i < datos.length; i++) 
    {
         var linea = datos[i];
         arrayJson.push({
            id: Number(linea[0]),
            mes: Number(linea[1]),
            mes_nombre: CalcularMes(Number(linea[1])),
            completo: linea[2],
            inquilino: Number(linea[3]),
            alquiler: Number(linea[4]),
            alquiler_nombre: await ObtenerAlquilerNombre(Number(linea[4])),
            valorpago: Number(linea[5])
         })
    }
    return arrayJson
}

export async function ObtenerCobros_ParaAlquiler(idAlquiler) {
    let arrayJson = [];
    let datos = await ReadData("cobros")
    for (var i = 1; i < datos.length; i++) 
    {
         var linea = datos[i];
         if(Number(linea[0]) == idAlquiler){
            arrayJson.push({
                id: Number(linea[0]),
                mes: Number(linea[1]),
                mes_nombre: CalcularMes(Number(linea[1])),
                completo: linea[2],
                inquilino: Number(linea[3]),
                alquiler: Number(linea[4]),
                valorpago: Number(linea[5])
             })
         }
    }
    return arrayJson
}

function CalcularMes(mes){
    switch(mes){
        case 1: return "Enero";
        case 2: return "Febrero";
        case 3: return "Marzo";
        case 4: return "Abril";
        case 5: return "Mayo";
        case 6: return "Junio";
        case 7: return "Julio";
        case 8: return "Agosto";
        case 9: return "Septiembre";
        case 10: return "Octubre";
        case 11: return "Noviembre";
        case 12: return "Diciembre";
    }
}

async function ObtenerAlquilerNombre(idAlquiler){
    let devolver = "--";
    let alquileres = await ObtenerAlquileres();
    alquileres.forEach(element => {
        if(element.id == idAlquiler){
            devolver = element.nombre;
        }
    });
    return devolver;
}