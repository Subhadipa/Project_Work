const {google}=require("googleapis")

const getSheet= async function(req,res)
{
    try{
    let data =req.files.jsonFile.data;
    var arr = new Array();


for(let i = 0; i!= data.length;i++)
{
 
    arr[i] = String.fromCharCode(data[i]);
   
}

var bstr = arr.join("");

var bstr1=JSON.parse(bstr)
/*const result = bstr1.map(value => ((Object.entries(value))))                  //.toString().split(","));
for(let j=0;j!=result.length;j++)
{
  for(let j1=0;j1!=result[j].length;j1++)
    {
      result[j][0]=((result[j][0])).join(",").split(",");                            //.toString()
     // var finalData = result[j][0]
    }
}*/
//console.log(result)
//console.log((JSON.parse(result)))
//console.log(JSON.parse(result))
//console.log(bstr1)
for(let i=0;i!=bstr1.length;i++)
{
    
    
     columns=Object.keys(bstr1[i])
    
    
}
//console.log(columns)



let rows=[]
let row
//for (let key in bstr1) 
 //{
  //   let keyValues = bstr1[key];

   //  rows[key]=(Object.values(keyValues))
    
   //  let rowsValue1=JSON.parse(rows[key])
   // rows.push(rowsValue1);
  /*  if(typeof rows[key]==Number)
    {
        rows[key]=rows[key].toString()
    }
 for (var prop in  keyValues) 
    {
        
       if(keyValues.hasOwnProperty(prop))
       {
      
        
         row=(keyValues[prop])
        rows.push(row);
        }
      
        //rows1=[...rows]
         
       }*/
//}


//console.log(rows)

//console.log(result);
//var bstr1000=JSON.parse(rows)
//console.log(rows)
//console.log(bstr1)
    const auth=new google.auth.GoogleAuth({

        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
});
 // Create client instance for auth
 const client = await auth.getClient();

 // Instance of Google Sheets API
 const googleSheets = google.sheets({ version: "v4", auth: client });

 const spreadsheetId = "13wDKeTDCHgt0kAXdK7pAGZWjSSu0nyoX6EbZr7kSVhg";
// Get metadata about spreadsheet
const metaData = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  });

  //console.log(metaData.data)
  //res.send({msg:metaData})

 // Read rows from spreadsheet
 const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Sheet1",
  });
 // return res.send(getRows.data);
// Write row(s) to spreadsheet
const getRows1=await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "Sheet1",
    valueInputOption: "USER_ENTERED",
  
    
   resource: {  values: [columns]},//[result]
  });
  //return res.send(getRows1.auth);
  return res.status(201).send({status:"true",msg:"Excel file created Successfully"})
    }
    catch(err)
    {
        return res.status(500).send({status:"false",msg:err.message})
    }
}

module.exports={getSheet}