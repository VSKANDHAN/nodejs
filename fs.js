// 
const { log } = require('console')
const fs=require('fs')
console.log('before starting the file operations');
fs.readFile('./filesystem/first.txt','utf8',(err,res)=>{
    if(err){
        console.log(err);
        return 
    }
    const first=res
fs.readFile('./filesystem/second.txt','utf8',(err,res)=>{
    if(err){
        console.log(err);
        return
    }
    const second=res
fs.writeFile('./filesystem/first.html',`${first} and ${second}`,{flag:'a'},(err,res)=>{
    if(err){
        console.log(err);
        return
    }
    console.log('done uploading the code to index.html file');

})
})
})
console.log('done the task');