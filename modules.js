//OS Module
const { log } = require('console');
const os=require('os')
const obj={
    user:os.userInfo(),
    type:os.type(),
release:os.release(),
uptime:os.uptime(),
totalmemory:os.totalmem(),
freememory:os.freemem()
}
console.log(obj);
//Path Module
const path=require('path')
console.log(path.sep);
const abspath=path.join('folder','subfolder','hello.txt')
console.log(abspath)
console.log(path.basename(abspath));
console.log(path.resolve(__dirname,'folder','subfolder','hello.txt'));
