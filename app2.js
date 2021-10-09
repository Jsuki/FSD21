/*
var heading = document.getElementById('heading')
var para = document.getElementsByClassName('para')
var tags = document.getElementsByTagName('a')
var query = document.querySelector('.para')

//console.log(tags)
console.log(query)
/*
console.log(heading)
console.log(para)
console.log(para.length)
console.log(para[0])
console.log(para[1])

// para.push('jidnya')  no access to this method

var heading = document.getElementById('heading')
var body = document.querySelector('body')

heading.innerHTML= "I Was Added By JS"
heading.style ="color:red;font-size:2rem"

heading.classList.add('five')
heading.classList.remove('one')

body.classList.remove('dark')


//console.log(heading.classList)

*/
//FOR LOOP
var list = document.querySelector('ul')
//console.log(list)

var arr = ['GO TO GYM', 'COOK OATMEAL', 'EAT']
arr.push('COMPLETE ASSIGNMENT')
for (var i=0;i<arr.length ;i++)
{
    var element = document.createElement('li')
    var textNode = document.createTextNode(arr[i])
    element.appendChild(textNode)
    list.appendChild(element)
   
}
