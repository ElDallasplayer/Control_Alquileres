
MakeGrid({
    columns: [
     {
       name: 'Nombre',
       formatter: (cell) => cell.firstName
     }, 
     'Email',
     'Telefono'
    ],
    search: true,
    data: [
      [{ firstName: 'John', lastName: 'MP' }, 'john@example.com', '(353) 01 222 3333'],
      [{ firstName: 'Mark', lastName: 'Blue' }, 'mark@gmail.com',   '(01) 22 888 4444'],
      [{ firstName: 'Eoin', lastName: 'Kavanagh' }, 'eo3n@yahoo.com',   '(05) 10 878 5554'],
      [{ firstName: 'Megan', lastName: 'Niesen' }, 'nis900@gmail.com',   '313 333 1923']
    ]
  },
  "tableContainer"
)
