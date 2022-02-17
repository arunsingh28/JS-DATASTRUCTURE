const readline = require('readline')

const rl = readline.CreateInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter any String:",(string)=>{
    console.log("Hello",string)
    console.log('Size:',string.length)
    rl.close()
})
