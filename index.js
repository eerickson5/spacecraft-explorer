document.addEventListener('DOMContentLoaded', () => {
    //document.querySelector("button").addEventListener("click", () => loadContent());
    loadContent();
})

function loadContent(){
    //fetch("https://ll.thespacedevs.com/2.2.0/spacecraft/?in_space=true")
    fetch("http://localhost:3000/results")
    .then(res => res.json())
    .then(data => renderCards(data))
}

function renderCards(data){
    // data.results.forEach(craft => {
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
        //container.appendChild(body);

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

    const timeInSpace = document.createElement("h3")
    timeInSpace.textContent = `Time in Space: ${craft.time_in_space}`
    container.append(timeInSpace)

    if(craft.in_space){
        const inSpaceTag = document.createElement("button")
        inSpaceTag.textContent = "In Space Now!"
        container.push(inSpaceTag)
    }

    const image = document.createElement("img")
    image.src = craft.spacecraft_config.image_url
    container.append(image)

    const description = document.createElement("p")
    description.textContent = craft.description
    container.append(description)

    parentContainer.appendChild(container)
}