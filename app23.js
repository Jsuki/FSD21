// let greet = new Promise((resolve , reject) =>{
//     setTimeout( ()=> {
//         resolve("welcome")
//     }, 2000)
// })

// // console.log(greet)

// // setTimeout( () => {
// //     console.log(greet)
// // }, 6000)

// greet.then(value => {
//     console.log(value)
//     return "welcome again"
// }).then(newValue => {
//     console.log(newValue)
// })

//let response = fetch('https://jsonplaceholder.typicode.com/todos/10')

//console.log(response)

// response.then(data => {
//     return(data.json())   
// }).then(content => {
//     console.log(content)
// })

// const ul = document.querySelector('ul')
// const button = document.querySelector('button')
// const getText = document.querySelector('input')

// const getData = async (item) => {
//     const url = `https://api.edamam.com/search?app_id=bd51454f&app_key=3b359328e30cad3141319969dfedaba9&q=${item}`
//     console.log(url)
//     const res = await fetch(url)
//     const data = await res.json()
//     console.log(data.hits)
// }

// //adding event listner to the button
// button.addEventListener('click' , (e) => {
//     //console.log(input.value)
//     getData(getText.value)
// })


const person = ({
    name: "prem",
    age :20,
    country : "India"
})
//destructuring in javascript

const { name ,age, country} = person

console.log(name , age , country)

// console.log(person.name)

// console.log(`Hi ${person.name} you are ${person.age}`)
