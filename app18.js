// // // // // // // function greet(Name,age) {
// // // // // // //     console.log(Name,age)
// // // // // // //     console.log('HELLO')
// // // // // // // }

// // // // // // // greet('Anisha',19)
// // // // // //FUNCTION KEYWORD DECLARATION 
// // // // // // function sum(a=0,b=0)
// // // // // // {
// // // // // //     var sum = a + b
// // // // // //     return sum
// // // // // // }

// // // // // // var result = sum(10,20)
// // // // // // console.log(result)

// // // // // //FUNCTION EXPRESSION
// // // // // var add  =function(a=0,b=0)
// // // // // {
// // // // //     var sum =a + b
// // // // //     return sum
// // // // // }
// // // // // console.log(add(10,20))
// // // // //FUNCTION EXPRESSION
// // // // var greet = function (Name) {
// // // //     var greet = Name
// // // //     return greet
// // // //  }
// // // //  console.log(greet('jidnya',20))
// // // //arrow function
// // // var add  =(a=0,b=0) => {
// // //      var sum =a + b
// // //      return sum
// // //  }
// // //  console.log(add(10,20))
// // var add = (a=0 , b=0) => a+b
// // console.log(add(10,20))
// const greet =name => 'hi '  + name 
// console.log(greet('JIDNYASA'))
//ARRAY METHODS

//callback function
//var arr = ['go to gym','eat food','clean room']
// var callbackfunction = (element, index) => {
//     console.log(element,index)
// }
// arr.forEach(callbackfunction)

// arr.forEach( (element, index) => {
//     console.log(element,index)
// })

// var button = document.querySelector('button')
// var input = document.querySelector('input')
// var list = document.querySelector('ul')

//const callbackfunc = (event) => {
//     const inputvalue = input.value
//     const element = document.createElement('li')
//     const textNode = document.createTextNode(inputvalue)
//     element.appendChild(textNode)
//     list.appendChild(element)
// 
//}

var body = document.querySelector('body')
var button = document.querySelector('button')

const callbackfunc = (event) => {
   body.classList.toggle('dark')
}

button.addEventListener('click', callbackfunc)