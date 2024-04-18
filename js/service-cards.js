document.addEventListener("DOMContentLoaded", function() {
    const services = [
        {
            title: "Power Washing",
            text: "Our power washing services utilize high-pressure water to thoroughly clean and restore your property's exterior surfaces, effectively removing dirt, grime, and stains for a rejuvenated appearance.",
            icon: "fa-solid fa-water"
        },
        {
            title: "Moving",
            text: "We provide dependable moving services with meticulous attention to safely transporting your belongings, ensuring a smooth transition to your new location.",
            icon: "fa-solid fa-people-carry-box"
        },
        {
            title: "Dump Runs",
            text: "We offer efficient dump run services to help you dispose of unwanted items, decluttering your space and disposing of waste responsibly.",
            icon: "fa-solid fa-dumpster"
        },
        {
            title: "Landscaping",
            text: "Our professional landscaping services enhance the beauty and functionality of your outdoor spaces, including garden design, maintenance, and installation.",
            icon: "fa-brands fa-pagelines"
        },
        {
            title: "Handyman",
            text: "Our skilled handyman team handles a variety of home repair and improvement projects, ensuring high-quality workmanship to maintain and enhance the value of your property.",
            icon: "fa-solid fa-hammer"
        },
        {
            title: "House Cleaning",
            text: "Our house cleaning services offer meticulous attention to detail, providing deep cleaning solutions that leave your home spotless and hygienic, tailored to your specific needs.",
            icon: "fa-solid fa-hand-sparkles"
        },
        {
            title: "Car Detailing",
            text: "We specialize in car detailing, employing advanced techniques and premium products to meticulously clean, polish, and protect your vehicle, enhancing its appearance and longevity.",
            icon: "fa-solid fa-car-side"
        },
        {
            title: "Snow Removal",
            text: "Our snow removal services ensure your driveways and walkways are clear and safe during the winter months, using efficient equipment and techniques to handle even the heaviest snowfalls.",
            icon: "fa-solid fa-dumpster"
        },
        {
            title: "Dog Care",
            text: "Dedicated to the well-being of your pets, we offer comprehensive dog care services that include thorough washing and regular walking to keep your furry friends healthy and happy.",
            icon: "fa-solid fa-dog"
        }
    ];

    const container = document.getElementById('services-container');
    services.forEach(service => {
        const serviceHTML = `
            <div class="col-md-4 mb-3">
            <div class="card service-card">
                <div class="card-body">
                    <!-- Flex container for icon and title -->
                    <div class="title-icon-wrapper">
                        <i class="${service.icon} fa-2x"></i>
                        <h3 class="card-title">${service.title}</h3>
                    </div>
                    <p class="card-text">${service.text}</p>
                </div>
            </div>
        </div>
        `;
        container.innerHTML += serviceHTML;
    });
});
