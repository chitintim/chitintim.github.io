// Initialize with safer animations
document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded - safe version');

    // Update location time
    const updateTime = () => {
        const ukTime = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/London"}));
        const timeStr = ukTime.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit'
        });
        const locationEl = document.getElementById('location');
        if (locationEl) {
            locationEl.textContent = `London ${timeStr}`;
        }
    };
    updateTime();
    setInterval(updateTime, 1000);

    // Calculate ski days
    const updateCountdown = () => {
        const now = new Date();
        const skiTrips = [
            new Date(2025, 11, 28), // Dec 28, 2025
            new Date(2026, 2, 21)   // March 21, 2026
        ];

        let nextTrip = null;
        for (let trip of skiTrips) {
            if (trip > now) {
                nextTrip = trip;
                break;
            }
        }

        if (!nextTrip) {
            nextTrip = new Date(now.getFullYear() + 1, 11, 1);
        }

        const diff = nextTrip - now;
        const days = diff / (1000 * 60 * 60 * 24);
        const skiDaysEl = document.getElementById('skiDays');
        if (skiDaysEl) {
            skiDaysEl.textContent = days.toFixed(6);
        }
    };
    updateCountdown();
    setInterval(updateCountdown, 10);

    // Update coffee count
    const updateCoffee = () => {
        const ukTime = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/London"}));
        const hours = ukTime.getHours();
        const minutes = ukTime.getMinutes();
        const seconds = ukTime.getSeconds();

        const coffeeEl = document.getElementById('coffeeCount');
        if (!coffeeEl) return;

        if (hours < 8) {
            coffeeEl.textContent = "0.00000";
        } else if (hours >= 16) {
            coffeeEl.textContent = "4.00000";
        } else {
            const totalSeconds = (hours - 8) * 3600 + minutes * 60 + seconds;
            const totalWorkSeconds = 8 * 3600;
            const coffees = (totalSeconds / totalWorkSeconds) * 4;
            coffeeEl.textContent = coffees.toFixed(5);
        }
    };
    updateCoffee();
    setInterval(updateCoffee, 100);

    // Add project animations with CSS classes instead of inline styles
    document.querySelectorAll('.project-item').forEach((item, index) => {
        item.classList.add('animated');
        item.style.animationDelay = `${index * 0.1}s`;
    });
});

// Make it rain function
function makeItRain() {
    const snowflakes = ['❄️', '❄️', '❄️', '❅', '❆', '❄️'];

    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const snow = document.createElement('div');
            snow.className = 'falling-emoji';
            snow.textContent = snowflakes[Math.floor(Math.random() * snowflakes.length)];
            snow.style.left = Math.random() * window.innerWidth + 'px';
            snow.style.top = '-50px';
            snow.style.animationDuration = (Math.random() * 3 + 2) + 's';
            document.body.appendChild(snow);

            setTimeout(() => snow.remove(), 5000);
        }, i * 100);
    }
}