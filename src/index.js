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
        span.classList.add("dogNames")
    })
    dogBar.addEventListener('click', (event) => { 
        event.preventDefault()
        pups.filter(element => {showMorePupInfo(element)})      
    })
}

function showMorePupInfo(pupIndividual) {
        const img = document.createElement('img')
        const h2 = document.createElement("h2")
        const button = document.createElement("button")
        img.src = pupIndividual.image
        h2.textContent = pupIndividual.name
        pupIndividual.isGoodDog ? button.innerText = 'Good Dog!' : button.innerText = 'Bad Dog!'
        dogInfo.append(img)
        dogInfo.append(h2)
        dogInfo.append(button)
}