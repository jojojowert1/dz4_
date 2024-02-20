const button = document.querySelector("button")
const PersonGet = document.querySelector(".person_cards")

button.addEventListener("click", ()=>{
   const request = new XMLHttpRequest()
    request.open("GET", "data.json")
    request.setRequestHeader("Contend-type", "application/json")
    request.send()
    request.addEventListener('load', ()=>{
        const data = JSON.parse(request.response)
        data.forEach(persons =>{
            const person = document.createElement('div')
            person.innerHTML = `
            <img class="img" src="${persons.person_photo}" alt="">
            <p>name: ${persons.name}</p>
            <span>age: ${persons.age}</span>
            `
            PersonGet.append(person)
        })
    })
})

