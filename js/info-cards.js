document.addEventListener("DOMContentLoaded", function() {
    const infoItems = [
        {
            icon: "fas fa-trophy fa-3x",
            title: "24/7 Champions",
            text: "Our service is like a superhero – doesn't take a day off. Whether it’s a holiday or your in-laws’ surprise visit, we're at your service at any hour – because sleep is overrated, right?"
        },
        {
            icon: "fa-solid fa-hand-holding-heart fa-3x",
            title: "Pampering Perfectionists",
            text: "We handle every home and vehicle with the kind of tender care usually reserved for a baby kangaroo in a pouch. Our team's attention to detail might just make your inanimate objects feel loved!"
        },
        {
            icon: "fas fa-location-crosshairs fa-3x",
            title: "Hometown Homies",
            text: "Straight outta Provo, we bring neighborly love to every job. We're the local lore legends, turning your chores into cheers. Keeping it small, keeping it real – that’s the Utah deal!"
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
