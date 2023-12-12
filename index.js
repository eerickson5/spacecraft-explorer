document.addEventListener('DOMContentLoaded', () => {
    loadContent();
})

function loadContent(){
    fetch("https://ll.thespacedevs.com/2.2.0/spacecraft/?in_space=true")
    .then(res => res.json())
    .then(data => renderCards(data))
}

function renderCards(data){
    data.results.forEach(craft => {
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