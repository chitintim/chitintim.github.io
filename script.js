// ─── Content Arrays ───

const taglines = [
    "Jack of all trades, master of absolutely none",
    "Professional overthinker",
    "Googles everything, remembers nothing",
    "Powered by caffeine and imposter syndrome",
    "Making it up as I go along",
    "Fake it till you... still faking it",
    "10% inspiration, 90% Stack Overflow"
];

const obsessions = [
    "skiing",
    "CAD modelling",
    "flying (real planes, not sims)",
    "3D printing",
    "optimising spreadsheets",
    "golf (badly)",
    "sailing (occasionally)",
    "Python scripts nobody asked for"
];

const avatars = ["🤷‍♂️", "🎿", "✈️", "⛳", "⛷️", "💻", "🤦‍♂️", "🙃", "😴", "🤔"];

const widgetGreetings = ["👋", "😎", "🤙", "✌️", "👀", "🎉", "🚀", "⭐"];

const greetings = [
    "Hello, this is Tim's digital mess",
    "Ey up me duck!",
    "Oi, why are you here?",
    "Hello, Tim's random corner",
    "Alright? Tim's weird page",
    "做乜嘢呀？(What you doing?)",
    "Welcome to Tim's chaos",
    "Oh, hey there!"
];

// ─── Initialise ───

document.addEventListener('DOMContentLoaded', () => {
    randomizeContent();
    typewriterGreeting();
    calculateSkiDays();
    updateCoffeeCount();
    setupInteractions();
    startRandomEvents();
    initScrollReveal();
    initParticles();
    initMouseParallax();
});

// ─── Typewriter Effect ───

function typewriterGreeting() {
    const el = document.getElementById('greeting');
    if (!el) return;

    const text = el.textContent;
    el.textContent = '';

    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    el.appendChild(cursor);

    let i = 0;
    const type = () => {
        if (i < text.length) {
            el.insertBefore(document.createTextNode(text[i]), cursor);
            i++;
            setTimeout(type, 40 + Math.random() * 35);
        } else {
            setTimeout(() => {
                cursor.style.animation = 'none';
                cursor.style.opacity = '0';
                cursor.style.transition = 'opacity 0.5s';
                setTimeout(() => cursor.remove(), 500);
            }, 2000);
        }
    };

    setTimeout(type, 300);
}

// ─── Randomize Content ───

function randomizeContent() {
    const greeting = document.getElementById('greeting');
    if (greeting) greeting.textContent = greetings[Math.floor(Math.random() * greetings.length)];

    const tagline = document.getElementById('tagline');
    if (tagline) tagline.textContent = taglines[Math.floor(Math.random() * taglines.length)];

    const obsession = document.getElementById('obsession');
    if (obsession) obsession.textContent = obsessions[Math.floor(Math.random() * obsessions.length)];

    const avatar = document.getElementById('avatar');
    if (avatar) avatar.textContent = avatars[Math.floor(Math.random() * avatars.length)];

    const widgetText = document.getElementById('widget-text');
    if (widgetText) widgetText.textContent = widgetGreetings[Math.floor(Math.random() * widgetGreetings.length)];
}

// ─── Ski Countdown with Emotional States ───

function getSkiMood(days) {
    if (days <= 0) return { emoji: '🎿', text: 'ON THE SLOPES!!!', mood: 'ecstatic' };
    if (days < 7) return { emoji: '🤯', text: `${Math.ceil(days)} DAYS!!! PACK THE BAG!!!`, mood: 'manic' };
    if (days <= 30) return { emoji: '🤩', text: 'Can almost smell the powder!', mood: 'excited' };
    if (days <= 100) return { emoji: '😩', text: '*cries in spreadsheet*', mood: 'suffering' };
    if (days <= 200) return { emoji: '😩', text: '*stares out window at rain*', mood: 'suffering' };
    return { emoji: '😭', text: 'this is fine. Everything is fine.', mood: 'despair' };
}

function calculateSkiDays() {
    const updateCountdown = () => {
        const now = new Date();

        const skiTrips = [
            new Date(2025, 11, 18), // Dec 18, 2025
            new Date(2025, 11, 28), // Dec 28, 2025
            new Date(2026, 2, 21),  // March 21, 2026
            new Date(2026, 11, 1)   // Dec 1, 2026 — next season
        ];

        let nextTrip = null;
        for (let trip of skiTrips) {
            if (trip > now) {
                nextTrip = trip;
                break;
            }
        }

        if (!nextTrip) {
            // All trips passed — next December
            nextTrip = new Date(now.getFullYear() + 1, 11, 1);
        }

        const diff = nextTrip - now;
        const days = diff / (1000 * 60 * 60 * 24);
        const mood = getSkiMood(days);

        // Update the big countdown
        const skiNumber = document.getElementById('skiNumber');
        const skiMood = document.getElementById('skiMood');
        const skiCard = document.getElementById('skiCard');

        if (skiCard) skiCard.dataset.mood = mood.mood;

        if (skiNumber) {
            if (days <= 0) {
                skiNumber.textContent = '0';
            } else if (days < 1) {
                skiNumber.textContent = Math.floor(diff / (1000 * 60 * 60)) + 'h';
            } else {
                skiNumber.textContent = days.toFixed(6);
            }
        }

        if (skiMood) skiMood.textContent = mood.emoji + ' ' + mood.text;

        // Update marquee duplicates
        const daysText = days <= 0 ? '🎿 NOW!' : days.toFixed(6);
        ['skiDays', 'skiDays2'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.textContent = daysText;
        });
    };

    updateCountdown();
    setInterval(updateCountdown, 10);
}

// ─── Coffee Counter ───

function updateCoffeeCount() {
    const updateCoffee = () => {
        const ukTime = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/London"}));
        const hours = ukTime.getHours();
        const minutes = ukTime.getMinutes();
        const seconds = ukTime.getSeconds();

        let coffeeText;
        if (hours < 8) {
            coffeeText = "0.00000";
        } else if (hours >= 16) {
            coffeeText = "4.00000";
        } else {
            const totalSeconds = (hours - 8) * 3600 + minutes * 60 + seconds;
            const coffees = (totalSeconds / (8 * 3600)) * 4;
            coffeeText = coffees.toFixed(5);
        }

        // Update both marquee copies
        ['coffeeCount', 'coffeeCount2'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.textContent = coffeeText;
        });
    };

    updateCoffee();
    setInterval(updateCoffee, 100);
}

// ─── Interactions ───

function setupInteractions() {
    let avatarClicks = 0;
    const avatar = document.getElementById('avatar');

    if (avatar) {
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
    }

    // Fact card click handlers
    document.querySelectorAll('.fact-card').forEach(card => {
        card.addEventListener('click', () => {
            const emoji = card.querySelector('.fact-emoji');
            if (emoji) {
                emoji.style.transform = 'scale(1.5) rotate(360deg)';
                setTimeout(() => { emoji.style.transform = ''; }, 300);
            }

            const factType = card.dataset.fact;
            const comments = {
                pilot: ["PA28 pilot who still grips the armrest in turbulence", "Real flying, not Microsoft Flight Sim"],
                consultant: ["PowerPoint warrior", "Professional meeting attender"],
                '3d': ["Half the prints fail but we don't talk about that", "My room smells like melted plastic"],
                golf: ["More time in the woods than Tiger Woods", "Professional ball donor to nature", "Golf courses hate this one trick: never finding the fairway", "Should probably just take up mini golf"],
                spontaneous: ["'Just a quick look' at flights = 3 hour rabbit hole", "Trip planning is my cardio"],
                code: ["console.log() is my debugging strategy", "// TODO: learn how this actually works"]
            };

            if (comments[factType]) {
                showToast(comments[factType][Math.floor(Math.random() * comments[factType].length)]);
            }
        });
    });

    // Hide scroll hint on first scroll
    const scrollHint = document.querySelector('.hero-scroll-hint');
    if (scrollHint) {
        let hidden = false;
        window.addEventListener('scroll', () => {
            if (!hidden && window.scrollY > 100) {
                scrollHint.style.opacity = '0';
                scrollHint.style.transition = 'opacity 0.5s';
                hidden = true;
            }
        }, { passive: true });
    }
}

// ─── Random Events ───

function startRandomEvents() {
    // Obsession cycling
    setInterval(() => {
        const obsessionEl = document.getElementById('obsession');
        if (obsessionEl) {
            const newObsession = obsessions[Math.floor(Math.random() * obsessions.length)];
            obsessionEl.style.opacity = '0';
            setTimeout(() => {
                obsessionEl.textContent = newObsession;
                obsessionEl.style.opacity = '1';
            }, 300);
        }
    }, 5000);

    // Bio variations
    setInterval(() => {
        const bioVariations = [
            "Hong Kong → London. Stuck in the corporate grind by day, tinkering with random projects by night. All gear, no idea.",
            "Ex-engineer at Rolls-Royce (aero, not cars). Now a slide monkey in London.",
            "Management consultant who'd rather be skiing. Or sailing. Or literally anywhere else.",
            "Professional overthinker with a GitHub account and too much free time."
        ];

        const bio = document.getElementById('bio');
        const obsessionEl = document.getElementById('obsession');
        if (bio && obsessionEl) {
            const currentObsession = obsessionEl.textContent;
            bio.innerHTML = bioVariations[Math.floor(Math.random() * bioVariations.length)] +
                           ` Perpetually obsessed with <span id="obsession">${currentObsession}</span>.`;
        }
    }, 30000);

    // Avatar mood swings
    setInterval(() => {
        const avatar = document.getElementById('avatar');
        if (avatar) {
            const oldAvatar = avatar.textContent;
            const newAvatar = avatars[Math.floor(Math.random() * avatars.length)];
            if (oldAvatar !== newAvatar) {
                avatar.style.transform = 'scale(0)';
                setTimeout(() => {
                    avatar.textContent = newAvatar;
                    avatar.style.transform = 'scale(1)';
                }, 150);
            }
        }
    }, 15000);
}

// ─── Scroll Reveal ───

function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
}

// ─── Mouse Parallax on Orbs ───

function initMouseParallax() {
    const orbs = document.querySelectorAll('.orb');
    if (!orbs.length || window.innerWidth < 768) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    document.addEventListener('mousemove', (e) => {
        targetX = (e.clientX / window.innerWidth - 0.5) * 2;
        targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    function animate() {
        // Smooth lerp
        currentX += (targetX - currentX) * 0.03;
        currentY += (targetY - currentY) * 0.03;

        orbs.forEach((orb, i) => {
            const intensity = (i + 1) * 15;
            const x = currentX * intensity;
            const y = currentY * intensity;
            // Preserve the orb's own animation by adding to it
            orb.style.marginLeft = x + 'px';
            orb.style.marginTop = y + 'px';
        });

        requestAnimationFrame(animate);
    }

    animate();
}

// ─── Particle Background ───

function initParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 18 : 35;
    const maxFps = isMobile ? 30 : 60;
    const frameInterval = 1000 / maxFps;
    let lastFrame = 0;
    let mouseX = -1000;
    let mouseY = -1000;
    let paused = false;

    const colours = [
        [255, 107, 107],  // red
        [78, 205, 196],   // teal
        [168, 85, 247],   // purple
        [255, 230, 109]   // gold
    ];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener('resize', resize);

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    document.addEventListener('touchmove', (e) => {
        if (e.touches[0]) {
            mouseX = e.touches[0].clientX;
            mouseY = e.touches[0].clientY;
        }
    }, { passive: true });

    document.addEventListener('visibilitychange', () => {
        paused = document.hidden;
    });

    const particles = [];
    for (let i = 0; i < particleCount; i++) {
        const c = colours[Math.floor(Math.random() * colours.length)];
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 1.8 + 0.5,
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: (Math.random() - 0.5) * 0.3,
            opacity: Math.random() * 0.2 + 0.05,
            r: c[0], g: c[1], b: c[2]
        });
    }

    function animate(timestamp) {
        requestAnimationFrame(animate);
        if (paused) return;

        const elapsed = timestamp - lastFrame;
        if (elapsed < frameInterval) return;
        lastFrame = timestamp - (elapsed % frameInterval);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];

            const dx = mouseX - p.x;
            const dy = mouseY - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 150 && dist > 0) {
                const force = (150 - dist) / 150;
                p.speedX -= (dx / dist) * force * 0.015;
                p.speedY -= (dy / dist) * force * 0.015;
            }

            p.speedX *= 0.997;
            p.speedY *= 0.997;
            p.x += p.speedX;
            p.y += p.speedY;

            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;

            ctx.fillStyle = `rgba(${p.r}, ${p.g}, ${p.b}, ${p.opacity})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();

            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const cdx = p.x - p2.x;
                const cdy = p.y - p2.y;
                const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

                if (cdist < 120) {
                    ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - cdist / 120) * 0.035})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        }
    }

    requestAnimationFrame(animate);
}

// ─── Toast Notifications ───

function showToast(message, isPowderTime = false) {
    const toast = document.createElement('div');

    if (isPowderTime) {
        const isMobile = window.innerWidth < 768;
        toast.innerHTML = message;
        toast.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0);
            background: linear-gradient(135deg, var(--accent2) 0%, var(--accent4) 100%);
            color: white;
            padding: ${isMobile ? '24px 36px' : '20px 32px'};
            border-radius: 24px;
            font-size: ${isMobile ? '1.4rem' : '1.1rem'};
            font-weight: 700;
            text-align: center;
            z-index: 10000;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5), 0 0 80px rgba(168, 85, 247, 0.3);
            border: 2px solid rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            animation: powderPop 0.5s ease-out forwards;
            min-width: ${isMobile ? '280px' : '250px'};
        `;
    } else {
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            bottom: 100px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(20, 20, 30, 0.8);
            color: white;
            padding: 14px 28px;
            border-radius: 50px;
            font-size: 0.9rem;
            font-weight: 500;
            z-index: 1000;
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            animation: fadeInUp 0.4s ease-out;
        `;
    }

    document.body.appendChild(toast);
    const duration = isPowderTime ? 2200 : 2000;

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = isPowderTime
            ? 'translate(-50%, -50%) scale(0.8)'
            : 'translateX(-50%) translateY(10px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// ─── BLIZZARD MODE ───

let blizzardActive = false;

function makeItRain() {
    if (blizzardActive) return;
    blizzardActive = true;

    const overlay = document.getElementById('blizzardOverlay');
    const vignette = document.getElementById('blizzardVignette');

    // Phase 1: Screen shake + vignette
    document.body.classList.add('blizzard-shake');

    // Phase 2: Blizzard snow layers
    setTimeout(() => {
        overlay.classList.add('active');
        vignette.classList.add('active');
    }, 200);

    // Phase 3: Emoji snowflakes on top
    const snowflakes = ['❄️', '❄️', '❄️', '❅', '❆', '🌨️'];
    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const snow = document.createElement('div');
            snow.className = 'falling-emoji';
            snow.textContent = snowflakes[Math.floor(Math.random() * snowflakes.length)];
            snow.style.left = Math.random() * window.innerWidth + 'px';
            snow.style.top = '-50px';
            snow.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
            snow.style.animationDuration = (Math.random() * 2.5 + 1.5) + 's';
            document.body.appendChild(snow);
            setTimeout(() => snow.remove(), 4500);
        }, i * 70);
    }

    // Phase 4: POWDER TIME popup
    setTimeout(() => {
        showToast("❄️ POWDER TIME! ❄️<br>RAIN?! ABSOLUTELY NOT!", true);
    }, 600);

    // Phase 5: Wind down
    setTimeout(() => {
        document.body.classList.remove('blizzard-shake');
    }, 2000);

    setTimeout(() => {
        overlay.classList.remove('active');
        vignette.classList.remove('active');
        blizzardActive = false;
    }, 5000);
}

// ─── SKI GAME: Powder Run ───

(function() {
    const canvas = document.getElementById('skiGameCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const W = 400;
    const H = 500;
    canvas.width = W;
    canvas.height = H;

    // Scale canvas for retina
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.scale(dpr, dpr);

    const startOverlay = document.getElementById('gameOverlay');
    const overOverlay = document.getElementById('gameOverOverlay');
    const startBtn = document.getElementById('gameStartBtn');
    const restartBtn = document.getElementById('gameRestartBtn');
    const hudEl = document.getElementById('gameHud');
    const scoreEl = document.getElementById('gameScore');
    const speedEl = document.getElementById('gameSpeed');
    const finalScoreEl = document.getElementById('gameFinalScore');
    const commentEl = document.getElementById('gameComment');

    let running = false;
    let raf = null;

    // Game state
    let skier, trees, snowParticles, trails, score, speed, steerInput;

    const gameComments = [
        { score: 0,   text: "Too much après, not enough skiing" },
        { score: 0,   text: "Lean forward next time... or at all" },
        { score: 0,   text: "That's what we call a yard sale" },
        { score: 0,   text: "Maybe stick to the magic carpet" },
        { score: 50,  text: "You definitely called that 'the last run'" },
        { score: 50,  text: "All gear, no idea — confirmed" },
        { score: 50,  text: "Pizza wedge would've saved you there" },
        { score: 50,  text: "Shouldn't have had that third vin chaud" },
        { score: 100, text: "The trees won. They always win." },
        { score: 100, text: "Should've gone parallel sooner" },
        { score: 100, text: "Ski patrol is on their way" },
        { score: 100, text: "That's what happens after too many Jagerbombs at Folie Douce" },
        { score: 200, text: "Not bad! Your instructor would almost be proud" },
        { score: 200, text: "Decent run — après beers are half-earned" },
        { score: 200, text: "'One more run' strikes again" },
        { score: 200, text: "You can see the chalet from here... nearly" },
        { score: 400, text: "Proper send! The après is fully earned" },
        { score: 400, text: "That's a gondola-worthy run that" },
        { score: 400, text: "Powder destroyed. No regrets." },
        { score: 400, text: "First lifts, last lifts, no lunch break energy" },
        { score: 700, text: "Absolute weapon. Freeride World Tour material." },
        { score: 700, text: "You ski like someone who lies about their handicap" },
        { score: 700, text: "The mountain bows to you. Briefly." }
    ];

    function initGame() {
        skier = { x: W / 2, y: H * 0.3, vx: 0, angle: 0, width: 12 };
        trees = [];
        snowParticles = [];
        trails = [];
        score = 0;
        speed = 2;
        steerInput = 0;

        // Pre-populate some trees below the start
        for (let i = 0; i < 8; i++) {
            trees.push({
                x: Math.random() * (W - 40) + 20,
                y: H + Math.random() * 400,
                size: Math.random() * 8 + 12,
                hit: false
            });
        }

        // Initial snow particles
        for (let i = 0; i < 30; i++) {
            snowParticles.push({
                x: Math.random() * W,
                y: Math.random() * H,
                size: Math.random() * 2 + 0.5,
                speed: Math.random() * 1 + 0.5,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }

    function startGame() {
        initGame();
        startOverlay.classList.add('hidden');
        overOverlay.classList.add('hidden');
        hudEl.style.display = 'flex';
        running = true;
        gameLoop();
    }

    function endGame() {
        running = false;
        if (raf) cancelAnimationFrame(raf);
        hudEl.style.display = 'none';

        const metres = Math.floor(score);
        finalScoreEl.textContent = metres + 'm';

        // Pick a comment appropriate to the score
        const eligible = gameComments.filter(c => metres >= c.score);
        const best = eligible.filter(c => c.score === Math.max(...eligible.map(e => e.score)));
        commentEl.textContent = best[Math.floor(Math.random() * best.length)].text;

        // Delay showing overlay for impact
        setTimeout(() => {
            overOverlay.classList.remove('hidden');
        }, 300);
    }

    function gameLoop() {
        if (!running) return;
        update();
        draw();
        raf = requestAnimationFrame(gameLoop);
    }

    function update() {
        // Accelerate gradually
        speed = Math.min(speed + 0.002, 8);
        score += speed * 0.3;

        // Steering physics — momentum-based
        const steerForce = 0.35;
        const friction = 0.92;
        skier.vx += steerInput * steerForce;
        skier.vx *= friction;
        skier.x += skier.vx;
        skier.angle = skier.vx * 3; // Visual lean

        // Clamp to bounds
        if (skier.x < skier.width) { skier.x = skier.width; skier.vx *= -0.3; }
        if (skier.x > W - skier.width) { skier.x = W - skier.width; skier.vx *= -0.3; }

        // Spray trail when turning
        if (Math.abs(skier.vx) > 0.5) {
            for (let i = 0; i < 2; i++) {
                trails.push({
                    x: skier.x + (skier.vx > 0 ? -6 : 6) + Math.random() * 4,
                    y: skier.y + 10,
                    vx: -skier.vx * 0.3 + (Math.random() - 0.5) * 2,
                    vy: -Math.random() * 1.5,
                    life: 1,
                    size: Math.random() * 2 + 1
                });
            }
        }

        // Update trails
        for (let i = trails.length - 1; i >= 0; i--) {
            const t = trails[i];
            t.x += t.vx;
            t.y += t.vy + speed * 0.5;
            t.life -= 0.025;
            if (t.life <= 0) trails.splice(i, 1);
        }

        // Move trees upward (simulates downhill)
        for (let i = trees.length - 1; i >= 0; i--) {
            trees[i].y -= speed;
            if (trees[i].y < -40) {
                trees.splice(i, 1);
            }
        }

        // Spawn new trees
        if (Math.random() < 0.03 + speed * 0.005) {
            trees.push({
                x: Math.random() * (W - 40) + 20,
                y: H + 20,
                size: Math.random() * 8 + 12,
                hit: false
            });
        }

        // Collision detection
        for (const tree of trees) {
            if (tree.hit) continue;
            const dx = skier.x - tree.x;
            const dy = skier.y - tree.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < tree.size * 0.5 + skier.width * 0.5) {
                tree.hit = true;
                endGame();
                return;
            }
        }

        // Snow particles drift
        for (const p of snowParticles) {
            p.y -= speed * p.speed;
            p.x += Math.sin(p.y * 0.01) * 0.3;
            if (p.y < -10) {
                p.y = H + 10;
                p.x = Math.random() * W;
            }
        }

        // HUD
        scoreEl.textContent = Math.floor(score) + 'm';
        speedEl.textContent = Math.floor(speed * 12) + ' km/h';
    }

    function draw() {
        // Background gradient
        const grad = ctx.createLinearGradient(0, 0, 0, H);
        grad.addColorStop(0, '#0a1628');
        grad.addColorStop(1, '#0f2847');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);

        // Ski tracks (subtle)
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
        ctx.lineWidth = 2;
        // Left track
        ctx.beginPath();
        ctx.moveTo(skier.x - 4, skier.y + 8);
        ctx.lineTo(skier.x - 4 - skier.vx * 2, H);
        ctx.stroke();
        // Right track
        ctx.beginPath();
        ctx.moveTo(skier.x + 4, skier.y + 8);
        ctx.lineTo(skier.x + 4 - skier.vx * 2, H);
        ctx.stroke();

        // Snow spray trails
        for (const t of trails) {
            ctx.fillStyle = `rgba(200, 230, 255, ${t.life * 0.5})`;
            ctx.beginPath();
            ctx.arc(t.x, t.y, t.size, 0, Math.PI * 2);
            ctx.fill();
        }

        // Trees
        for (const tree of trees) {
            drawTree(tree.x, tree.y, tree.size, tree.hit);
        }

        // Skier
        drawSkier(skier.x, skier.y, skier.angle);

        // Snow particles
        for (const p of snowParticles) {
            ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function drawTree(x, y, size, hit) {
        const colour = hit ? 'rgba(255, 107, 107, 0.8)' : 'rgba(40, 120, 80, 0.9)';

        // Shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.beginPath();
        ctx.ellipse(x + 3, y + size * 0.6, size * 0.4, size * 0.15, 0, 0, Math.PI * 2);
        ctx.fill();

        // Tree body (3 triangles stacked)
        ctx.fillStyle = colour;
        for (let i = 0; i < 3; i++) {
            const tier = i;
            const tW = size * (1 - tier * 0.2);
            const tH = size * 0.5;
            const tY = y - tier * tH * 0.55;

            ctx.beginPath();
            ctx.moveTo(x, tY - tH * 0.5);
            ctx.lineTo(x + tW * 0.5, tY + tH * 0.3);
            ctx.lineTo(x - tW * 0.5, tY + tH * 0.3);
            ctx.closePath();
            ctx.fill();
        }

        // Snow cap
        ctx.fillStyle = 'rgba(220, 240, 255, 0.6)';
        const topY = y - size * 0.75;
        ctx.beginPath();
        ctx.moveTo(x, topY);
        ctx.lineTo(x + size * 0.2, topY + size * 0.2);
        ctx.lineTo(x - size * 0.2, topY + size * 0.2);
        ctx.closePath();
        ctx.fill();

        // Trunk
        ctx.fillStyle = '#3d2817';
        ctx.fillRect(x - 2, y + size * 0.3, 4, size * 0.25);
    }

    function drawSkier(x, y, angle) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle * Math.PI / 180);

        // Subtle glow under skier
        ctx.shadowColor = 'rgba(78, 205, 196, 0.3)';
        ctx.shadowBlur = 10;

        // Skis — long, parallel, slightly angled with the lean
        ctx.shadowBlur = 0;
        ctx.strokeStyle = '#d0d8e0';
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        // Left ski
        ctx.beginPath();
        ctx.moveTo(-5, -8);
        ctx.lineTo(-6, 14);
        ctx.stroke();
        // Right ski
        ctx.beginPath();
        ctx.moveTo(5, -8);
        ctx.lineTo(4, 14);
        ctx.stroke();
        // Ski tips (curved front)
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(-6, 14);
        ctx.quadraticCurveTo(-7, 17, -5, 18);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(4, 14);
        ctx.quadraticCurveTo(3, 17, 5, 18);
        ctx.stroke();

        // Legs — slightly bent (ski stance)
        ctx.strokeStyle = '#2a2a3e';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        // Left leg
        ctx.beginPath();
        ctx.moveTo(-3, -2);
        ctx.lineTo(-4, -8);
        ctx.stroke();
        // Right leg
        ctx.beginPath();
        ctx.moveTo(3, -2);
        ctx.lineTo(4, -8);
        ctx.stroke();

        // Boots
        ctx.fillStyle = '#1a1a2e';
        ctx.fillRect(-6, -10, 4, 3);
        ctx.fillRect(2, -10, 4, 3);

        // Body / jacket
        ctx.fillStyle = '#4ecdc4';
        ctx.beginPath();
        ctx.moveTo(-6, -2);
        ctx.lineTo(6, -2);
        ctx.lineTo(5, -14);
        ctx.lineTo(-5, -14);
        ctx.closePath();
        ctx.fill();

        // Jacket detail stripe
        ctx.strokeStyle = '#3dbdb5';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(-5, -8);
        ctx.lineTo(5, -8);
        ctx.stroke();

        // Arms — tucked with poles
        const armAngle = angle * 0.3;
        ctx.strokeStyle = '#4ecdc4';
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        // Left arm
        ctx.beginPath();
        ctx.moveTo(-5, -10);
        ctx.lineTo(-10, -5 + armAngle);
        ctx.stroke();
        // Right arm
        ctx.beginPath();
        ctx.moveTo(5, -10);
        ctx.lineTo(10, -5 - armAngle);
        ctx.stroke();

        // Ski poles
        ctx.strokeStyle = '#888';
        ctx.lineWidth = 1.5;
        // Left pole
        ctx.beginPath();
        ctx.moveTo(-10, -5 + armAngle);
        ctx.lineTo(-12, 8);
        ctx.stroke();
        // Right pole
        ctx.beginPath();
        ctx.moveTo(10, -5 - armAngle);
        ctx.lineTo(12, 8);
        ctx.stroke();
        // Pole baskets (circles at bottom)
        ctx.strokeStyle = '#666';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(-12, 9, 2, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(12, 9, 2, 0, Math.PI * 2);
        ctx.stroke();

        // Head
        ctx.shadowColor = 'rgba(78, 205, 196, 0.4)';
        ctx.shadowBlur = 8;
        ctx.fillStyle = '#f0d0b0';
        ctx.beginPath();
        ctx.arc(0, -18, 5, 0, Math.PI * 2);
        ctx.fill();

        // Helmet
        ctx.shadowBlur = 0;
        ctx.fillStyle = '#ff6b6b';
        ctx.beginPath();
        ctx.arc(0, -19, 5.5, Math.PI, 0);
        ctx.fill();

        // Goggles
        ctx.fillStyle = '#222';
        ctx.fillRect(-4, -19, 8, 3);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 0.5;
        ctx.strokeRect(-4, -19, 8, 3);

        ctx.restore();
    }

    // Controls
    const keys = {};
    document.addEventListener('keydown', (e) => {
        keys[e.key] = true;
        updateSteer();
    });
    document.addEventListener('keyup', (e) => {
        keys[e.key] = false;
        updateSteer();
    });

    function updateSteer() {
        if (keys['ArrowLeft'] || keys['a']) steerInput = -1;
        else if (keys['ArrowRight'] || keys['d']) steerInput = 1;
        else steerInput = 0;
    }

    // Touch controls
    let touchStartX = null;
    canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        if (!running) return;
        touchStartX = e.touches[0].clientX;
        const rect = canvas.getBoundingClientRect();
        const touchX = e.touches[0].clientX - rect.left;
        steerInput = touchX < rect.width / 2 ? -1 : 1;
    }, { passive: false });

    canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        if (!running) return;
        const rect = canvas.getBoundingClientRect();
        const touchX = e.touches[0].clientX - rect.left;
        steerInput = touchX < rect.width / 2 ? -1 : 1;
    }, { passive: false });

    canvas.addEventListener('touchend', () => {
        steerInput = 0;
    });

    // Mouse controls for desktop
    canvas.addEventListener('mousemove', (e) => {
        if (!running) return;
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const centre = rect.width / 2;
        // Proportional steering based on distance from centre
        steerInput = Math.max(-1, Math.min(1, (mouseX - centre) / (centre * 0.6)));
    });

    canvas.addEventListener('mouseleave', () => {
        if (running) steerInput = 0;
    });

    // Accelerometer (mobile tilt steering)
    let gyroEnabled = false;

    function enableGyro() {
        if (gyroEnabled) return;

        const handler = (e) => {
            if (!running) return;
            // gamma = left-right tilt, range roughly -90 to 90
            const tilt = e.gamma || 0;
            // Normalise: ±20 degrees = full steer
            steerInput = Math.max(-1, Math.min(1, tilt / 20));
        };

        // iOS 13+ requires permission request
        if (typeof DeviceOrientationEvent !== 'undefined' &&
            typeof DeviceOrientationEvent.requestPermission === 'function') {
            DeviceOrientationEvent.requestPermission().then(state => {
                if (state === 'granted') {
                    window.addEventListener('deviceorientation', handler);
                    gyroEnabled = true;
                }
            }).catch(() => {});
        } else if ('DeviceOrientationEvent' in window) {
            window.addEventListener('deviceorientation', handler);
            gyroEnabled = true;
        }
    }

    // Buttons
    startBtn.addEventListener('click', () => {
        enableGyro();
        startGame();
    });
    restartBtn.addEventListener('click', () => {
        enableGyro();
        startGame();
    });

    // Draw idle state
    initGame();
    draw();
})();

// ─── Console Easter Eggs ───

console.log('%c Welcome to the source code! 🎮', 'font-size: 16px; color: #ff6b6b; font-weight: bold;');
console.log('%c Click the snowflake for a surprise ❄️', 'font-size: 12px; color: #4ecdc4;');
console.log('%c Built with Claude doing 90%% of the work', 'font-size: 12px; color: #a855f7;');

// ─── Tab Visibility ───

let originalTitle = "Oh hi, it's Tim";
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.title = "Come back! I'm lonely... 😢";
    } else {
        document.title = originalTitle;
    }
});
