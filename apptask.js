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
const table = document.querySelector('table')
console.log(table)


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

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => {
    console.log(data)
    data.forEach(user => {
        console.log(data)
    })
})


