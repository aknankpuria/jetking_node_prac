// # Q5-> Create a Node.js file that replaces the content of existing file using the File System module


const fs = require('fs');

const filepath ='old.txt' ;

const msgtoadd = "this is a latest text that has been replaced by the old text in `old.txt` file . we used wrteFile method to replace the contents .  this directoly comes from Q5.js file ......."


fs.writeFile(filepath,msgtoadd,(err)=>{
    if(err) {
        console.error('yo, try again ! , some unexpected occured')
    } else {
        console.log("Data in the file has been replaced successfully")
    }
    
});