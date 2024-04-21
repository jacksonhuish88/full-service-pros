document.addEventListener("DOMContentLoaded", function() {
    const services = [
        {
            title: "Power Washing",
        },
        {
            title: "Moving",
        },
        {
            title: "Dump Runs",
        },
        {
            title: "Turf Install",
        },
        {
            title: "Handyman",
        },
        {
            title: "House Cleaning",
        },
        {
            title: "Car Detailing",
        },
        {
            title: "Snow Removal",
        },
        {
            title: "Dog Care"
        }
    ];

    const dropdownMenu = document.getElementById("servicesDropdownMenu");

    services.forEach(service => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.classList.add("dropdown-item");
        link.href = `#${service.title.toLowerCase().replace(/\s+/g, '-')}`;
        link.innerHTML = service.title;
        listItem.appendChild(link);
        dropdownMenu.appendChild(listItem);
    });
});
