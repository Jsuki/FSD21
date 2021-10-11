// ul = document.querySelector('ul')
// let response = fetch('https://jsonplaceholder.typicode.com/users')
// .then(resp => resp.json()).then(data => {
//     console.log(data);
//     append_data = (element) => {
//         lielement = document.createElement('li');
//         user_detail = element['name'] + element['username'] + element['email']
//         textnode = document.createTextNode(user_detail);
//         lielement.appendChild(textnode);
//         ul.appendChild(lielement);
//     }
//     data.forEach(append_data);
// })
//const table = document.querySelector('table')
//console.log(table)


// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(data => {
//     console.log(data)
//     data.forEach(user => {
//         //console.log(user)
//         let newRow = document.createElement('tr')
//         // let dataID = document.createElement('td')
//         // let dataIDtextNode = document.createTextNode(user.id)
//         // dataID.appendChild(dataIDtextNode)
//         // newRow.appendChild(dataID)

//         let element = `
//         <td>${user.id}</td>
//         <td>${user.name}</td>
//         <td>${user.email}</td>
//         <td>${user.username}</td>`
//        // console.log(element)
//         newRow.innerHTML = element
//         table.appendChild(newRow)

//     })
// })

// const createRow = (user) => {
//     let newRow = document.createElement('tr')
//     let element = `
//         <td>${user.id}</td>
//         <td>${user.name}</td>
//         <td>${user.email}</td>
//         <td>${user.username}</td>`
//     newRow.innerHTML = element
//     return newRow
// }
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(data => {
//     console.log(data)
//     data.forEach(user => {
//         table.appendChild(createRow(user))
//     })
// })

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(data => {
//     console.log(data)
//     data.forEach(user => {
//         console.log(data)
//     })
// })

// const fetchData = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
    
//     console.log(response)
//     const data = await response.json()
//      console.log(data)
// }
// fetchData()



button = document.querySelector('button')
input = document.querySelector('input')

const getData = async (item) => {
    const url = `https://api.edamam.com/search?app_id=bd51454f&app_key=3b359328e30cad3141319969dfedaba9&q=${item}`
    const res = await fetch(url)
    const data = await res.json()
    console.log()
    data.hits.forEach(recipe => {
        console.log(recipe)
    })

}

//adding event listner to the button
button.addEventListener('click' , (e) => {
    //console.log(input.value)
    getData(input.value)
})