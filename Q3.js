//  Q3 -> Create a Node.js file that opens an empty file using the File System module.


const fs = require('fs');

const filepath ='newfile.txt' ;


fs.open(filepath,'w',(err , fd)=>{
    if(err) {
        console.error('yo, try again ! , some unexpected occured')
    } else {
        console.log("Empty file has been created ")

        fs.close(fd , (closeerr)=>{
       
             if (closeerr){
                console.error("error in closing the file")
             }else{
                console.log("file closed successfully")
             }

        }
        
        )
    }
    
});

//  new file has been created in the directory . 
