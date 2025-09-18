// Random taglines
const taglines = [
    "Jack of all trades, master of absolutely none",
    "Professional overthinker",
    "Googles everything, remembers nothing",
    "Powered by caffeine and imposter syndrome",
    "Making it up as I go along",
    "Fake it till you... still faking it",
    "10% inspiration, 90% Stack Overflow"
];

// Random obsessions
const obsessions = [
    "skiing",
    "CAD modelling",
    "flight sim",
    "3D printing",
    "optimising spreadsheets",
    "golf (badly)",
    "sailing (occasionally)",
    "Python scripts nobody asked for"
];

// Random avatars
const avatars = ["🤷‍♂️", "🎿", "✈️", "⛳", "⛷️", "💻", "🤦‍♂️", "🙃", "😴", "🤔"];

// Random greetings for the widget
const widgetGreetings = ["👋", "😎", "🤙", "✌️", "👀", "🎉", "🚀", "⭐"];

// Random greeting messages
const greetings = [
    "Hello, this is Tim's digital mess",
    "Ey up me duck!",
    "Oi, why are you here?",
    "Hello, Tim's random corner",
    "Alright? Tim's weird page",
    "做乜嘢呀？(What you doing?)",
    "Welcome to Tim's chaos"
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    randomizeContent();
    calculateSkiDays();
    updateCoffeeCount();
    setupInteractions();
    startRandomEvents();
});

// Randomize content on load/refresh
function randomizeContent() {
    // Random greeting
    const greeting = document.getElementById('greeting');
    greeting.textContent = greetings[Math.floor(Math.random() * greetings.length)];

    // Random tagline
    const tagline = document.getElementById('tagline');
    tagline.textContent = taglines[Math.floor(Math.random() * taglines.length)];

    // Random obsession
    const obsession = document.getElementById('obsession');
    const randomObsession = obsessions[Math.floor(Math.random() * obsessions.length)];
    obsession.textContent = randomObsession;

    // Random avatar mood
    document.getElementById('avatar').textContent = avatars[Math.floor(Math.random() * avatars.length)];

    // Random widget greeting
    document.getElementById('widget-text').textContent = widgetGreetings[Math.floor(Math.random() * widgetGreetings.length)];
}

// Calculate days till next ski trip
function calculateSkiDays() {
    const now = new Date();
    const currentYear = now.getFullYear();

    // Your known ski trips
    const skiTrips = [
        new Date(2025, 11, 28), // Dec 28, 2025 - La Tania
        new Date(2026, 2, 21)   // March 21, 2026 - Japan
    ];

    // Find the next upcoming trip
    let nextTrip = null;
    for (let trip of skiTrips) {
        if (trip > now) {
            nextTrip = trip;
            break;
        }
    }

    if (!nextTrip) {
        // If no trips scheduled, default to next December
        nextTrip = new Date(currentYear + 1, 11, 1);
    }

    const days = Math.floor((nextTrip - now) / (1000 * 60 * 60 * 24));

    if (days === 0) {
        document.getElementById('skiDays').textContent = "SKI TRIP TODAY!!!";
    } else if (days === 1) {
        document.getElementById('skiDays').textContent = "1 day till next ski trip";
    } else {
        document.getElementById('skiDays').textContent = `${days} days till next ski trip`;
    }
}

// Update coffee count based on time of day
function updateCoffeeCount() {
    const hour = new Date().getHours();
    let coffees = Math.floor(hour / 3);
    if (coffees === 0) coffees = 1;
    if (coffees > 8) coffees = "way too many";

    document.getElementById('coffeeCount').textContent = `Probably ${coffees} coffees deep today`;
}

// Setup all interactions
function setupInteractions() {
    // Avatar click counter for secret
    let avatarClicks = 0;
    const avatar = document.getElementById('avatar');

    avatar.addEventListener('click', () => {
        avatarClicks++;
        avatar.classList.add('spinning');
        setTimeout(() => avatar.classList.remove('spinning'), 500);

        if (avatarClicks === 5) {
            document.body.classList.add('shake');
            setTimeout(() => document.body.classList.remove('shake'), 500);
            avatarClicks = 0;
            showToast("Stop clicking me! 😵");
        }
    });

    // Floating widget menu toggle
    const widget = document.getElementById('widget');
    const secretMenu = document.getElementById('secretMenu');

    widget.addEventListener('click', () => {
        widget.classList.toggle('active');
        secretMenu.classList.toggle('show');
    });

    // Fact cards interactions
    document.querySelectorAll('.fact-card').forEach(card => {
        card.addEventListener('click', () => {
            const emoji = card.querySelector('.fact-emoji');
            emoji.style.transform = 'scale(1.5) rotate(360deg)';
            setTimeout(() => {
                emoji.style.transform = '';
            }, 300);

            // Random comment based on fact type
            const factType = card.dataset.fact;
            const comments = {
                pilot: ["Love flying, hate heights. Make it make sense", "Ex-Rolls-Royce (the jet engines, not the posh cars)"],
                consultant: ["PowerPoint warrior", "Professional meeting attender"],
                '3d': ["Half the prints fail but we don't talk about that", "My room smells like melted plastic"],
                golf: ["More time in the rough than on the fairway", "Professional ball hunter"],
                spontaneous: ["'Just a quick look' at flights = 3 hour rabbit hole", "Trip planning is my cardio"],
                code: ["console.log() is my debugging strategy", "// TODO: learn how this actually works"]
            };

            if (comments[factType]) {
                showToast(comments[factType][Math.floor(Math.random() * comments[factType].length)]);
            }
        });
    });

    // Project hover effects
    document.querySelectorAll('.project-card').forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.style.animation = 'slideUp 0.5s ease-out forwards';
    });
}

// Random events that happen occasionally
function startRandomEvents() {
    // Random bio updates
    setInterval(() => {
        const bioVariations = [
            "Hong Kong → London. Stuck in the corporate grind by day, tinkering with random projects by night. All gear, no idea.",
            "Ex-engineer at Rolls-Royce (aero, not cars). Now a slide monkey in London.",
            "Management consultant who'd rather be skiing. Or sailing. Or literally anywhere else.",
            "Professional overthinker with a GitHub account and too much free time."
        ];

        const bio = document.getElementById('bio');
        const currentObsession = document.getElementById('obsession').textContent;
        bio.innerHTML = bioVariations[Math.floor(Math.random() * bioVariations.length)] +
                       ` Perpetually obsessed with <span id="obsession">${currentObsession}</span>.`;
    }, 30000); // Every 30 seconds

    // Occasional avatar mood swings
    setInterval(() => {
        const avatar = document.getElementById('avatar');
        const oldAvatar = avatar.textContent;
        const newAvatar = avatars[Math.floor(Math.random() * avatars.length)];

        if (oldAvatar !== newAvatar) {
            avatar.style.transform = 'scale(0)';
            setTimeout(() => {
                avatar.textContent = newAvatar;
                avatar.style.transform = 'scale(1)';
            }, 150);
        }
    }, 15000); // Every 15 seconds
}

// Toast notifications
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--accent);
        color: white;
        padding: 12px 24px;
        border-radius: 25px;
        font-size: 0.9rem;
        z-index: 1000;
        animation: slideUp 0.3s ease-out;
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideUp 0.3s ease-out reverse';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// Secret menu functions
function enableChaosMode() {
    document.body.classList.add('chaos-mode');
    showToast("CHAOS MODE ACTIVATED 🌈");
    setTimeout(() => {
        document.body.classList.remove('chaos-mode');
    }, 5000);
}

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

    // Prank message
    setTimeout(() => {
        showToast("RAIN?! ABSOLUTELY NOT! IT'S POWDER TIME! ❄️");
    }, 500);
}


// Console easter eggs
console.log('%c Welcome to the source code! 🎮', 'font-size: 16px; color: #ff6b6b; font-weight: bold;');
console.log('%c Click the snowflake for a surprise ❄️', 'font-size: 12px; color: #4ecdc4;');

// Page visibility API - change title when tab is hidden
let originalTitle = "Oh hi, it's Tim";
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.title = "Come back! I'm lonely... 😢";
    } else {
        document.title = originalTitle;
    }
});

// Add some CSS for the toast animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from { opacity: 0; transform: translate(-50%, 20px); }
        to { opacity: 1; transform: translate(-50%, 0); }
    }
`;
document.head.appendChild(style);