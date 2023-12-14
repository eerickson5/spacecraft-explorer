document.addEventListener('DOMContentLoaded', () => {
    //document.querySelector("button").addEventListener("click", () => loadContent());
    loadContentFromLocal();
    document.querySelector("form").addEventListener("submit", (event) => handleFormSubmission(event))
})

function handleFormSubmission(event){
    event.preventDefault()
    document.querySelector("#description-container").innerHTML = ""

    const spaceCheck = event.target.childNodes[1].checked
    const activeCheck = event.target.childNodes[6].checked
    const apiCheck = event.target.childNodes[11].checked

    const filterString = `/?${spaceCheck ? "in_space=true&" : ""}${activeCheck ? "status.name=Active" : ""}`

    apiCheck ? loadContentFromAPI(filterString) : loadContentFromLocal(filterString);
}

function loadContentFromLocal(condition = ""){
    document.getElementById("spacecrafts-container").innerHTML = ""

    fetch("http://localhost:3000/results" + condition)
    .then(res => res.json())
    .then(data => renderCards(data))
}

function loadContentFromAPI(condition = ""){
    document.getElementById("spacecrafts-container").innerHTML = ""

    fetch("https://ll.thespacedevs.com/2.2.0/spacecraft" + condition)
    .then(res => res.json())
    .then(data => renderCards(data.results))
}

function renderCards(data){
    console.log(data)
        data.forEach(craft => {

        const container = document.createElement("div")
        container.classList.add("card")
        container.addEventListener("click", (() => expandCard(craft)))

        const name = document.createElement("h2")
        name.textContent = craft.name

        const body = document.createElement("p")
        body.textContent = craft.description

        const image = document.createElement("img")
        image.src = craft.spacecraft_config.image_url

        container.appendChild(name);
        container.appendChild(image);

        const parentContainer = document.getElementById("spacecrafts-container");
        parentContainer.appendChild(container)

    })
}

function expandCard(craft){
    const parentContainer = document.querySelector("#description-container")
    parentContainer.innerHTML = ''

    const container = document.createElement("div")

    const name = document.createElement("h1")
    name.textContent = craft.name
    container.append(name)

    if(craft.in_space){
        const inSpaceTag = document.createElement("h4")
        inSpaceTag.textContent = "In Space Now!"
        container.appendChild(inSpaceTag)
    }

    const image = document.createElement("img")
    image.src = craft.spacecraft_config.image_url
    container.append(image)

    const description = document.createElement("p")
    description.textContent = craft.description
    container.append(description)

    parentContainer.appendChild(container)
    window.scrollTo(0, 100);
}