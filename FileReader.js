const fs = require ('fs')
fs.readFile('./Welcome.txt','utf-8',(err,data)=>{
    if(err){
                console.log(err)
            }
    else{
                console.log(data)
            }
})
console.log(fs.readFileSync('./Welcome.txt','utf-8'))

