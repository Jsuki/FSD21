//############ SCOPES
// // let a =30
// // var b =40
// // console.log(a,b)
// if (true)
// {
//     let Name = 'Ferari'
   
// }
// console.log(Name)
// for(var i=0 ;i<10;i++)
// {
//     console.log('loop ran')
// }
// console.log(i)

// if(true) {
//     console.log(Name)
//     if (true)
//     {
//         var Name ="ferari"
        
//     }
// }

//############### OBJECT METHODS ###########

// const print = () => {
//     var Name = "Lamborghini"
//     return Name
// }
// print()
// console.log(Name)
//console.log(this.alert('hi'))  //this is window object in JS
// var car = {
//     name:"C Class",
//     manufacturer: "mercedes",
//     print :function (a) {
//         //console.log(name +'by ' + this.manufacturer)
//         //console.log('car')
//         console.log(a)
//     }
// }
// car.print('ferari')
//console.log(car.print())
//console.log(car.manufacturer)
// var car = {
//     name:"C Class",
//     manufacturer: "mercedes",
//     print :function () {
//         //console.log(this.name + ' was manufactured by '+this.manufacturer)
//         //console.log(this.manufacturer,this.name)
//         console.log(`${this.name} was created by ${this.manufacturer}`)
//         console.log(`hii`)
//     }
// }
// car.print()
// var car = {
//     name:"C Class",
//     manufacturer: "mercedes",
//     print : () => {
//         //console.log(this)
//         //console.log(this.name + ' was manufactured by '+this.manufacturer)
//         //console.log(this.manufacturer,this.name)
//         console.log(`${car.name} was created by ${car.manufacturer}`)
//         console.log(`Hii`)
//     }
// }
//car.print()
//object methods
// console.log(Object)
//console.log(car)
//console.log(car.hasOwnProperty('manufacturer'))
//console.log(Object.keys(car))
// console.log(Object.values(car))


//###################

// setTimeout( () => {
//     console.log('jidnyasa')
// },0)

//console.log('hi')

//###############3
//promises starting
var data = fetch('https://jsonplaceholder.typicode.com/todos/10')
console.log(data)
