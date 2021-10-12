//console.log('something')
// for(var i=0 ; i< 10 ;i++)
// {
//     console.log('iteration', i+1)
// }

//browser environment
// console.log(document)
// console.log(window)

//part of V8 Engine
// setTimeout( () => {
//     console.log('Hii')
// }, 3000)

// #############  MODULES IN NODEJS   ###############
//const greet = () => 'Hi'
//module.exports.something = 'Hi'
//module.exports.greet = greet
//console.log(module)

const add = () => {
    console.log('I ADD STUFF')
}
const subtract = () => {
    console.log('I SUBTRACT STUFF')
}
const multiply = () => {
    console.log('I MULTIPLY STUFF')
}
const divide = () => {
    console.log('I DIVIDE STUFF')
}

module.exports.add = add
module.exports.subtract = subtract
module.exports.multiply = multiply
module.exports.divide = divide
module.exports.message = 'MESSAGE'
//console.log(module)

