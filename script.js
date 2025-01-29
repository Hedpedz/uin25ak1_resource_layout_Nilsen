const resourcesSection = document.getElementById("resources");
const tabs = document.querySelectorAll(".tab");

function displayResources(category) {
    const resource = resources.find(res => res.category === category);

    if (resource) {
        resourcesSection.innerHTML = `
            <h2>${resource.category}</h2>
            <p>${resource.text}</p>
            <ul>
                ${resource.sources
                    .map(source => `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`)
                    .join("")}
            </ul>
        `;
    }
}

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));

        tab.classList.add("active");

        const category = tab.getAttribute("data-category");
        displayResources(category);
    });
});

displayResources("HTML");
