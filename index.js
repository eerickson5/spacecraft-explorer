document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("button").addEventListener("click", () => loadContent());
    //loadContent();
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

        const container = document.createElement("div");
        container.classList.add("card")

        const name = document.createElement("h2");
        name.textContent = craft.name

        const body = document.createElement("p");
        body.textContent = craft.description

        container.appendChild(name);
        container.appendChild(body);

        const parentContainer = document.getElementById("spacecrafts-container");
        parentContainer.appendChild(container)

    })
}