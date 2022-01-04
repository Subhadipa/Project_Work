const XLSX = require('xlsx')

//const data=require("../sheetData.json")
const _ = require('lodash');


exports.createExcel = (req,res)=>  
{
 
 var data =req.files.jsonFile.data;
 //console.log(data)
var arr = new Array();
//console.log(arr)

for(let i = 0; i!= data.length;i++)
{
 
    arr[i] = String.fromCharCode(data[i]);
   
}

var bstr = arr.join("");
var bstr1=JSON.parse(bstr)
//console.log(bstr1)

const workSheet = XLSX.utils.json_to_sheet(bstr1);
//console.log(workSheet)

const workBook = XLSX.utils.book_new();
//console.log(workBook)

 XLSX.utils.book_append_sheet(workBook, workSheet, "Data By Teesta")
// Binary string
 XLSX.write(workBook, { bookType: "xlsx", type: "binary" })

 XLSX.writeFile(workBook, "Subhadipa_sheetData.xlsx")
 return res.status(201).send({status:"true",msg:"Excel file created Successfully"})
}
