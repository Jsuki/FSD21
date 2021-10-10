// const a = document.querySelectorAll('input')[0]
// const b = document.querySelectorAll('input')[1]
// const add = document.querySelector('#add')
// const multiply =document.querySelector('#multiply')
// const subtract =document.querySelector('#subtract')
// const resultBox =document.querySelector('.result')



//  const sum = () =>{
//      const result = parseInt(a.value) + parseInt(b.value)
//      console.log(result)
//      resultBox.innerHTML= result
//  }


//  const product = () =>{
//       const result = parseInt(a.value) * parseInt(b.value)
//       console.log(result)
//       resultBox.innerHTML= result
//   }
//   const sub = () =>
//   {
//     const result = parseInt(a.value) - parseInt(b.value)
//     console.log(result)
//     resultBox.innerHTML= result   
//   }
//   add.addEventListener('click',sum)
//   multiply.addEventListener('click',product)
//   subtract.addEventListener('click',sub)

//  const calculate = (event , operation) =>{
//      //console.log(event.target)
//     //  if(operation == 'add')
//     //  {
//     //     // const result = parseInt(a.value) + parseInt(b.value)
//     //     // console.log(result)
//     //     // resultBox.innerHTML= result
//     //     console.log('adding')
//     //  }else if (operation == 'multiply'){
//     //     // const result = parseInt(a.value) * parseInt(b.value)
//     //     // console.log(result)
//     //     // resultBox.innerHTML= result
//     //     console.log('multiply')
//     // 
//     switch (operation) {
//         case "add":
//             resultBox.innerHTML = parseInt(a.value) + parseInt(b.value)
//             break
//         case "multiply":
//             resultBox.innerHTML = parseInt(a.value) * parseInt(b.value)
//             break
//         case "subtract":
//             resultBox.innerHTML = parseInt(a.value) - parseInt(b.value)
//             break
//         default:
//             resultBox.innerHTML = "Not a valid operation"
//     }
//  //}
//  }
//  add.addEventListener('click', (event) => calculate(event, 'add'))
//  multiply.addEventListener('click', (event) => calculate(event, 'multiply'))
//  subtract.addEventListener('click', (event) => calculate(event, 'subtract'))


//ARRAY METHODS
// var arr = [1,2,3,4,5,6,7,8]
//arr.unshift(6)
//arr.shift()
//var new_arr = arr.slice(2,5)
//console.log(arr)
//console.log(new_arr)
// var new_arr = []
// for(var i=0;i<arr.length;i++)
// {
//     if(arr[i] %2 == 0) new_arr.push(arr[i])
// }
// console.log(new_arr)
// var new_arr = arr.filter((element , index) => {
//     if (element < 4) return true
// })

//console.log(new_arr)
var arr = [1,2,3,4,5,6,7,8]
arr.splice(0,1)
console.log(arr)
