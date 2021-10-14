// const { Console } = require('console')
// const { dirname, extname } = require('path')
// const path = require('path')

//console.log(path)
// console.log(path.resolve('./app26.js'))
// console.log(path.relative('/',"./temp/util26.js"))
// console.log(extname('./app26.js'))
//console.log(dirname('./temp/util26.js'))
// console.log(__dirname)
const fs = require('fs')

// console.log(fs)
// fs.readFile('./text.txt','utf8' , (error,data) => {
//     if (error) console.log(error)
//     else console.log(data)
// })


//console.log(fs)
// fs.readFile('./text.txt' , (error,data) => {
//     if (error) console.log(error)
//     else console.log(data.toString())
// })

// console.log(fs.readFileSync('./text.txt','utf-8'))

// console.log(`i am the log`)


// fs.writeFile('./text.txt' , "HII JIDNYA" ,(error) => {
//     if (error) console.log(error)
   
// })

fs.writeFile('./text.txt' ,`aPPEND ME ${fs.readFileSync('./text.txt','utf8')}` ,(error) => {
    if (error) console.log(error)
   
})