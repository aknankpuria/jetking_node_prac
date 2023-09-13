//  Q3 -> Create a Node.js file that opens an empty file using the File System module.


const fs = require('fs');

const filepath ='demo.txt' ;

const msgtoadd = "this is a text that has been added using fs .  this directoly comes from Q2.js file ......."


fs.appendFile(filepath,msgtoadd,(err)=>{
    if(err) {
        console.error('yo, try again ! , some unexpected occured')
    } else {
        console.log("File updated successfully")
    }
    
});
