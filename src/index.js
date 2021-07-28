const dogBar = document.querySelector("#dog-bar")
const dogInfo = document.querySelector("#dog-info")

fetch("http://localhost:3000/pups")
.then(resp => resp.json())
.then(json => {addPupsToDogBar(json)})


function addPupsToDogBar(pups) {
    pups.forEach(element => {
        const span = document.createElement("span")
        span.textContent = element.name
        dogBar.append(span)
        span.addEventListener('click', (event) => { 
            event.preventDefault()
            showMorePupInfo(element)     
        })
    })
}

function showMorePupInfo(pupIndividual) {
    dogInfo.innerHTML = `
    <img src=${pupIndividual.image}>
    <h2>${pupIndividual.name}</h2>
    <button>${pupIndividual.isGoodDog ? 'Good Dog!' : 'Bad Dog'}</button>
    `
    dogInfo.querySelector('button').addEventListener('click', () => {
        pupIndividual.isGoodDog = !pupIndividual.isGoodDog
        showMorePupInfo(pupIndividual)
    })
}
