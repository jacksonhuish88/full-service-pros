document.addEventListener("DOMContentLoaded", function() {
    const services = [
        {
            title: "Power Washing",
            text: "Our power washing services utilize high-pressure water to thoroughly clean and restore your property's exterior surfaces, effectively removing dirt, grime, and stains for a rejuvenated appearance.",
            icon: "fa-solid fa-water",
            photo: "./img/powerwashing.png"
        },
        {
            title: "Moving",
            text: "We provide dependable moving services with meticulous attention to safely transporting your belongings, ensuring a smooth transition to your new location.",
            icon: "fa-solid fa-people-carry-box",
            photo: "./img/moving.jpg"
        },
        {
            title: "Dump Runs",
            text: "We offer efficient dump run services to help you dispose of unwanted items, decluttering your space and disposing of waste responsibly.",
            icon: "fa-solid fa-dumpster",
            photo: "./img/dump-runs.jpg"
        },
        {
            title: "Landscape & Install",
            text: "Our professional landscaping services enhance the beauty and functionality of your outdoor spaces, including garden design, maintenance, and installation.",
            icon: "fa-brands fa-pagelines",
            photo: "./img/landscaping.jpg"
        },
        {
            title: "Handyman",
            text: "Our skilled handyman team handles a variety of home repair and improvement projects, ensuring high-quality workmanship to maintain and enhance the value of your property.",
            icon: "fa-solid fa-hammer",
            photo: "./img/handyman.jpg"
        },
        {
            title: "House Cleaning",
            text: "Our house cleaning services offer meticulous attention to detail, providing deep cleaning solutions that leave your home spotless and hygienic, tailored to your specific needs.",
            icon: "fa-solid fa-hand-sparkles",
            photo: "./img/house-cleaning.jpg"
        },
        {
            title: "Car Detailing",
            text: "We specialize in car detailing, employing advanced techniques and premium products to meticulously clean, polish, and protect your vehicle, enhancing its appearance and longevity.",
            icon: "fa-solid fa-car-side",
            photo: "./img/carwash.jpg"
        },
        {
            title: "Snow Removal",
            text: "Our snow removal services ensure your driveways and walkways are clear and safe during the winter months, using efficient equipment and techniques to handle even the heaviest snowfalls.",
            icon: "fa-solid fa-snowflake",
            photo: "./img/snow-removal.jpg"
        },
        {
            title: "Dog Care",
            text: "Dedicated to the well-being of your pets, we offer comprehensive dog care services that include thorough washing and regular walking to keep your furry friends healthy and happy.",
            icon: "fa-solid fa-dog",
            photo: "./img/dogs.jpg"
        }
    ];

    const container = document.getElementById('services-container');
    services.forEach(service => {
        const serviceHTML = `
            <div class="col-md-4 mb-3" id="${service.title.toLowerCase().replace(/\s+/g, '-')}">
            <div class="card service-card">
                <div class="card-body">
                <!-- Anchor link wrapping the icon and title -->
                <div class="title-icon-wrapper">
                    <i class="${service.icon} fa-2x"></i>
                    <h3 class="card-title">${service.title}</h3>
                </div>
                <p class="card-text">${service.text}</p>
                <div class="image-container">
                <img src="${service.photo}" alt="${service.text}" style="max-width: 100%; height: auto;"/>
            </div>
                </div>
            </div>
        </div>
        `;
        container.innerHTML += serviceHTML;
    });
});
