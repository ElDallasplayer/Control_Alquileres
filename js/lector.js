const separador = ",";

export async function ReadData(nameData) {
    const response = await fetch("./data/" + nameData + ".csv");
    const data = await response.text();
    let array = [];
    let dataSeparada = data.split(/\r\n/);
    dataSeparada.forEach((dato) => {
        let datosDelElemento = dato.split(separador);
        array.push(datosDelElemento);
    });
    return array;
}