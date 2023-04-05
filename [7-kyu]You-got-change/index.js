
const startBtn = document.querySelector('#start')
const resultSpan = document.querySelector('#result')
const ul = document.querySelector('#lastValues')
let arrayDef = [1, 5, 10, 20, 50, 100]
let lastSearchs = []


function createLi(searchs) {

    const li = document.createElement('li')
    li.textContent = searchs
    li.classList.add('defaultText')
    ul.appendChild(li)
}

startBtn.addEventListener('click', function () {
    const inputValue = document.querySelector('#value')
    let newArray = []

    try {
        let value = parseInt(inputValue.value)
        arrayDef.sort((a,b) => {
            if (a > b ) return -1;
            if (a > b ) return 1;
            return 0
        });

        arrayDef.forEach(e => {
            let calculated = 0
            if (Math.floor(value / e) > 0){
                calculated = Math.floor(value / e)
                value -= calculated * e
            }
            newArray.push(calculated)
        })

        newArray.reverse()
        lastSearchs.push(['Valor: '+inputValue.value, ' Resultado: ' + newArray])

    } catch (err) {
        alert("Insira um valor válido! \n"+err)
    }

    resultSpan.textContent = newArray

    ul.innerHTML =''

    lastSearchs.forEach(e =>{
        createLi(e);
    })
})

