document.addEventListener("DOMContentLoaded", function() {
    const infoItems = [
        {
            icon: "fas fa-clock fa-3x",
            title: "Experienced & Reliable",
            text: "Contact us 24/7 and know that you are being well taken care of. Our number one concern is your satisfaction."
        },
        {
            icon: "fas fa-heartbeat fa-3x",
            title: "Servicing with Care",
            text: "Our employees diligently service homes and vehicles with the utmost care as if they were our own. We want to make your moving journeys and car care as stressless as possible!"
        },
        {
            icon: "fas fa-home fa-3x",
            title: "Small & Local",
            text: "Originating in Park City, we call Utah home. As a family business, we like to help other families on their new adventures in life and take care of their belongings."
        }
    ];

    const container = document.getElementById('info-items-container');
    infoItems.forEach(item => {
        const itemHTML = `
            <div class="col-md-4">
                <div class="info-item">
                    <i class="${item.icon}"></i>
                    <h3>${item.title}</h3>
                    <p>${item.text}</p>
                </div>
            </div>
        `;
        container.innerHTML += itemHTML;
    });
});
