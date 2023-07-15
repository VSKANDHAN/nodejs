const { readFile } = require('fs').promises;

// const util=require('util')
// const readfilepromise=util.promisify(fs.readFile)
// const getfile=(path)=>{
//     return new Promise((resolve,reject)=>{
//         fs.readFile(path,'utf8',(err,res)=>{
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(res)
//             }
//         })
//     })
// }
// getfile('./filesystem/first.txt').then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })
console.log("the process is initiated");
const get=async()=>{
    try{
        
    const first=await readFile('./filesystem/first.txt','utf8')
    const second=await readFile('./filesystem/second.txt','utf8')

    console.log(first," ", second);
    }
    catch(err){
        console.log(err);
    }
}
get()
console.log("the process is completed");