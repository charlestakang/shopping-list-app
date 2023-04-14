const button = document.querySelector(".btn-lg")
const input = document.querySelector('#form-input')
const ul = document.querySelector('ul')
const clear = document.getElementById('clear')



button.addEventListener('click', getValue )
ul.addEventListener('click', deleteItem)


function getValue(e){
    e.preventDefault()
    if(input.value === ""){
        alert("Please add an Item")
        return
    }

    const icon = document.createElement('i')
    icon.className = "fa-regular fa-xmark fa-lg text-danger"

    const button = document.createElement('button')
    button.className = 'btn remove-item'
    button.setAttribute('type', 'button')
    button.appendChild(icon)

    const p = document.createElement('p')
    p.className = 'pt-2'
    //p.innerHTML = "Maggi Cube"
    const text = document.createTextNode(input.value)
    p.appendChild(text)

    const li = document.createElement('li')
    li.className = "d-flex justify-content-between fw-bold col-12 border mb-2 px-3 rounded pt-2"
    li.appendChild(p)
    li.appendChild(button)


    ul.appendChild(li)

    console.log(button)
    console.dir(icon)
}

function deleteItem(e){
    if(e.target.parentElement.classList.contains('remove-item') ){
        e.target.parentElement.parentElement.remove()
    }
}

clear.addEventListener('click', deleteAllItems)




function deleteAllItems(){
    // ul.innerHTML = ''
    
    // if (ul.innerHTML !== null){
    //     ul.innerHTML = ''
    // }

    while(ul.firstChild){
        ul.removeChild(ul.firstChild)
    }
}
// function img1Click(e){
//    const event = e.timeStamp
//     console.dir(event)
// }
//functions review

//write a function to calculate the area of a rectangle when given the length and the with.
// all transform your function into an arrow function area length * width

function rectangle(width, length){
    let area = width * length
    return  area
}

// const rectangle2 = function () {
//     console.log('second rectangle')
// }

// const thirdRectangle = (e) =>  'Arrow Function' + e

