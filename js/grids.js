function MakeGrid(data,elementId){
  console.log("INGRESA FUNCION")
  try{
    let container = new gridjs.Grid(data).render(document.getElementById(elementId));
    $(".gridjs-search-input").attr("placeholder","Buscar...");
  }catch(E){
    console.log(E)
  }
}
function MakeGridExample(){
    let container = new gridjs.Grid({
        columns: [
         {
           name: 'Name',
           formatter: (cell) => cell.firstName
         }, 
         'Email',
         'Phone Number'
        ],
        search: {
          selector: (cell, rowIndex, cellIndex) => cellIndex === 0 ? cell.firstName : cell
        },
        data: [
          [{ firstName: 'John', lastName: 'MP' }, 'john@example.com', '(353) 01 222 3333'],
          [{ firstName: 'Mark', lastName: 'Blue' }, 'mark@gmail.com',   '(01) 22 888 4444'],
          [{ firstName: 'Eoin', lastName: 'Kavanagh' }, 'eo3n@yahoo.com',   '(05) 10 878 5554'],
          [{ firstName: 'Megan', lastName: 'Niesen' }, 'nis900@gmail.com',   '313 333 1923']
        ]
      }).render(document.getElementById("tableContainer"));
}