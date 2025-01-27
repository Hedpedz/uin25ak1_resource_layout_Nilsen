document.addEventListener("DOMContentLoaded", () => {
    const resourcesSection = document.getElementById("resources");
    const tabs = document.querySelectorAll(".tab");

    function displayResources(category) {
        const resource = resources[category];
        if (resource) {
            resourcesSection.innerHTML = `
                <h2>${resource.title}</h2>
                <p>${resource.description}</p>
                <ul>
                    ${resource.links
                        .map(link => `<li><a href="${link.url}" target="_blank">${link.name}</a></li>`)
                        .join("")}
                </ul>
            `;
        } else {
            resourcesSection.innerHTML = `<p>Ingen ressurser tilgjengelige for denne kategorien.</p>`;
        }
    }

    displayResources("HTML");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));

            tab.classList.add("active");

            const category = tab.getAttribute("data-category");
            displayResources(category);
        });
    });
});
