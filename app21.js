// let value = new Promise((resolve , reject) => {
//     setTimeout( () => {
//         resolve('Hello')
//     }, 3000)
// })

// console.log(value)

// setTimeout( () => {
//     console.log(value)
// }, 4000)

//fetch is an API
//let data = fetch('https://jsonplaceholder.typicode.com/ users')

//console.log(data)

// setTimeout(() => {
//     const data = Response
//     console.log(data)
// },2000)
let response = fetch('https://jsonplaceholder.typicode.com/users').then(res => {
    let parsedData = res.json()
    console.log(parsedData)
    return (parsedData)
}).then(book => { console.log(book) })

