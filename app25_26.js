const button = document.querySelector('button')
const input = document.querySelector('input')
const div = document.querySelector('div')

//console.log(button,input,div)

//div.innerHTML = localStorage.getItem('InputValue')

// button.addEventListener('click' , (req , res) => {
//     localStorage.setItem('InputValue', [1, 2, 3, 4])
//     div.innerHTML = input.value
    
// })

//localStorage.setItem('InputValue', 'Something')
//localStorage.gettItem('InputValue')
 
const arr = [1, 2, 3, 4, 5]
// const val = JSON.stringify(arr)

// console.log(arr)
// console.log(val)

localStorage.setItem('val' ,JSON.stringify(arr))
//console.log(localStorage.getItem('val'))

console.log(JSON.parse(localStorage.getItem('val')))

// localStorage.setItem('val' , arr)

// console.log(localStorage.getItem('val'))

// const arr = localStorage.getItem('InputValue')
// console.log(arr)