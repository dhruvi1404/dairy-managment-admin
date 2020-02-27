 $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
        });






 let sortDirection=false;
  let personData=[

  {Product_id:1,Product_name:"Gold",Price:25,Retailers:"Mehta",Profit:0.5,loss:0,Total:0.5},
  {Product_id:2,Product_name:"Shakti",Price:24,Retailers:"Ganesh",Profit:0.2,loss:0,Total:0.2},
  {Product_id:3,Product_name:"Taza",Price:22,Retailers:"Shreeji",Profit:0.10,loss:0,Total:-0.25},
  {Product_id:4,Product_name:"Cow",Price:20,Retailers:"Kanji_bhai",Profit:0.00,loss:0.25,Total:0.1},
  ];

  window.onload=()=>{
  	loadTableData(personData);
  };
  


  function loadTableData(tableData)
  {
  	const tableBody=document.getElementById('tableData');
  	let dataHtml='';
  	for (let person of personData) {
  		dataHtml+= `<tr> <td>${person.Product_id}</td>
                        <td>${person.Product_name}</td>
                        <td>${person.Price}</td>
                        <td>${person.Retailers}</td>
                        <td>${person.Profit}</td>
                        <td>${person.loss}</td>
                        <td>${person.Total}</td>
                   </tr>`;
  	}
  	  
  	  tableBody.innerHTML=dataHtml;
  }
  function sortColumn(columnName){
   const dataType=typeof personData[0][columnName];
   
   sortDirection=!sortDirection;

   switch(dataType){

   	    case 'number':sortNumberColumn(sortDirection,columnName);
   	                  break;

   }

   loadTableData(personData);
  }
function sortNumberColumn(sort,columnName){
	personData=personData.sort((p1,p2)=>{
		return sort ? p1[columnName]-p2[columnName] : p2[columnName]-p1[columnName]
	});
}
