// # Q4-> Create a Node.js file that writes the file using the File System module.


const fs = require('fs');

const filepath ='newfile.txt' ;

const msgtoadd = "this a text that has been added using node js fs . we used wrteFile method to write the conntents .  this directoly comes from Q4.js file ......."


fs.writeFile(filepath,msgtoadd,(err)=>{
    if(err) {
        console.error('yo, try again ! , some unexpected occured')
    } else {
        console.log("Data in the file has been written successfully")
    }
    
});

