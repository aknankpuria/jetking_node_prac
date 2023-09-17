//Q.2 ->  Create a Node.js file that appends the existing file with a new content using the File System module.

const fs = require('fs');

new time = new Date().toLocaleString();

const filepath ='demo.txt' ;

const msgtoadd = "this is a text that has been added using fs .  this directoly comes from Q2.js file ......."


fs.appendFile(filepath,msgtoadd,(err)=>{
    if(err) {
        console.error('yo, try again ! , some unexpected occured')
    } else {
        console.log("File updated successfully")
    }
    
});
