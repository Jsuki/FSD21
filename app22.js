const list = document.querySelector('ul')

let arr = ['one ', 'two', 'three' , 'four']

//console.log(list)
arr.forEach(chore => {
    const element = document.createElement('li')
    const textNode = document.createTextNode(chore)
    element.appendChild(textNode)
    //to add elememt

    // element.addEventListener('click', (e) => {
    //     console.log(e.target.innerHTML)
    // })
    //console.log(element)

    //to remove element

    // element.addEventListener('click' , (e) => {
    //     e.target.remove()
    // })

    //PROMPT METHOD ASK BEFORE DELETE FUNCTION
    element.addEventListener('click' ,(e) => {
        const useInput = window.prompt(`Are you sure that you want to delete $(chore)`)
        if (useInput == 'YES') e.target.remove()
    })


     list.appendChild(element)
 })

