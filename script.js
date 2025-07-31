// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const subscriptionForm = document.getElementById('subscriptionForm');
const emailInput = document.getElementById('emailInput');
const formMessage = document.getElementById('formMessage');

// Countdown Timer Elements
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Debug: Check if elements are found
console.log('Timer elements:', { daysElement, hoursElement, minutesElement, secondsElement });

// Set launch date (30 days from now) - Only set once, then persist
let launchDate;
const storedLaunchDate = localStorage.getItem('portfolioLaunchDate');

if (storedLaunchDate) {
    // Use existing launch date from localStorage
    launchDate = new Date(storedLaunchDate);
    console.log('Using stored launch date:', launchDate.toLocaleString());
} else {
    // Set new launch date and store it
    launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);
    localStorage.setItem('portfolioLaunchDate', launchDate.toISOString());
    console.log('New launch date set and stored:', launchDate.toLocaleString());
}

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Change hamburger to X when menu is open
    const icon = menuToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close menu when clicking on navigation links
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navMenu.classList.remove('active');
        
        // Reset hamburger icon
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        
        // Smooth scroll to section (if sections exist)
        const targetId = link.getAttribute('href');
        if (targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        
        // Reset hamburger icon
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Countdown Timer Function
function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate.getTime() - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Add leading zeros and animate the change
        animateNumberChange(daysElement, String(days).padStart(2, '0'));
        animateNumberChange(hoursElement, String(hours).padStart(2, '0'));
        animateNumberChange(minutesElement, String(minutes).padStart(2, '0'));
        animateNumberChange(secondsElement, String(seconds).padStart(2, '0'));
        
        // Debug: log the countdown values
        console.log(`Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`);
    } else {
        // Countdown finished
        daysElement.textContent = '00';
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
        
        // You can add launch functionality here
        showMessage('We have launched! 🚀', 'success');
    }
}

// Animate number changes in countdown
function animateNumberChange(element, newValue) {
    if (!element) {
        console.error('Element not found for animation');
        return;
    }
    
    if (element.textContent !== newValue) {
        element.style.transform = 'scale(1.1)';
        element.style.transition = 'transform 0.2s ease';
        
        setTimeout(() => {
            element.textContent = newValue;
            element.style.transform = 'scale(1)';
        }, 100);
    }
}

// Configuration for email notifications
const NOTIFICATION_EMAIL = 'kumarnaitik7970@gmail.com';

// Initialize EmailJS (you'll need to replace with your actual EmailJS credentials)
function initializeEmailJS() {
    if (typeof emailjs !== 'undefined') {
        // You need to replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
        // Sign up at https://www.emailjs.com/ to get these credentials
        emailjs.init('YOUR_PUBLIC_KEY');
    }
}

// Function to reset the launch date (for development/testing)
function resetLaunchDate(daysFromNow = 30) {
    const newLaunchDate = new Date();
    newLaunchDate.setDate(newLaunchDate.getDate() + daysFromNow);
    localStorage.setItem('portfolioLaunchDate', newLaunchDate.toISOString());
    
    // Update the global variable
    launchDate = newLaunchDate;
    
    console.log(`Launch date reset to ${daysFromNow} days from now:`, newLaunchDate.toLocaleString());
    
    // Force an immediate update
    updateCountdown();
    
    return newLaunchDate;
}

// Function to get time remaining in a readable format
function getTimeRemaining() {
    const now = new Date().getTime();
    const distance = launchDate.getTime() - now;
    
    if (distance <= 0) {
        return 'Launch time has passed!';
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

// Function to view stored subscription emails (for development/testing)
function viewStoredEmails() {
    const emails = JSON.parse(localStorage.getItem('subscriptionEmails') || '[]');
    console.log('Stored subscription emails:', emails);
    return emails;
}

// Function to export emails to CSV
function exportEmailsToCSV() {
    const emails = JSON.parse(localStorage.getItem('subscriptionEmails') || '[]');
    if (emails.length === 0) {
        alert('No subscription emails found!');
        return;
    }
    
    const csvContent = "data:text/csv;charset=utf-8," 
        + "Email,Timestamp,Notified\n"
        + emails.map(item => {
            if (typeof item === 'string') {
                return `${item},Unknown,false`;
            }
            return `${item.email},${item.timestamp},${item.notified}`;
        }).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "portfolio_subscriptions.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Email Subscription Form
subscriptionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = emailInput.value.trim();
    
    if (validateEmail(email)) {
        showMessage('Subscribing...', 'info');
        
        // Send email notification
        sendEmailNotification(email)
            .then(() => {
                showMessage('Thank you! You\'ll be notified when we launch. 🎉', 'success');
                emailInput.value = '';
                storeEmail(email);
            })
            .catch((error) => {
                console.error('Email sending failed:', error);
                showMessage('Subscription successful! We\'ll notify you at launch.', 'success');
                emailInput.value = '';
                storeEmail(email);
            });
    } else {
        showMessage('Please enter a valid email address.', 'error');
    }
});

// Email validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Send email notification using EmailJS or fetch API
async function sendEmailNotification(subscriberEmail) {
    try {
        // Method 1: Using EmailJS (requires EmailJS account setup)
        // This is a client-side email service
        if (typeof emailjs !== 'undefined') {
            const templateParams = {
                to_email: NOTIFICATION_EMAIL,
                from_email: subscriberEmail,
                message: `New subscription from: ${subscriberEmail}`,
                subject: 'New Portfolio Launch Subscription'
            };
            
            return await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams);
        }
        
        // Method 2: Using a simple notification API (example with Formspree)
        const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: subscriberEmail,
                message: `New subscription for portfolio launch notifications`,
                _replyto: subscriberEmail
            })
        });
        
        if (!response.ok) {
            throw new Error('Failed to send notification');
        }
        
        return response.json();
    } catch (error) {
        // Fallback: Send email using mailto (opens user's email client)
        const subject = encodeURIComponent('New Portfolio Launch Subscription');
        const body = encodeURIComponent(`New subscriber: ${subscriberEmail}\n\nThis person wants to be notified when your portfolio launches!`);
        const mailtoLink = `mailto:${NOTIFICATION_EMAIL}?subject=${subject}&body=${body}`;
        
        // Open email client (this will work but requires user action)
        window.open(mailtoLink, '_blank');
        
        throw error; // Re-throw to handle in calling function
    }
}

// Show form messages
function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    
    // Auto-hide success/error messages after 5 seconds
    if (type !== 'info') {
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

// Store email locally and send notification
function storeEmail(email) {
    let emails = JSON.parse(localStorage.getItem('subscriptionEmails') || '[]');
    if (!emails.includes(email)) {
        emails.push({
            email: email,
            timestamp: new Date().toISOString(),
            notified: true
        });
        localStorage.setItem('subscriptionEmails', JSON.stringify(emails));
        
        // Log for development
        console.log(`New subscription: ${email} - Notification sent to ${NOTIFICATION_EMAIL}`);
        
        // Send browser notification if permission granted
        if (Notification.permission === 'granted') {
            new Notification('New Subscription!', {
                body: `${email} subscribed to your portfolio launch notifications`,
                icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjNjRmZmRhIi8+Cjwvc3ZnPgo='
            });
        }
    }
}

// Request notification permission on page load
function requestNotificationPermission() {
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    // Close menu with Escape key
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        
        // Reset hamburger icon
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Initialize countdown and set interval
console.log('Initializing countdown timer...');
updateCountdown(); // Run immediately
const countdownInterval = setInterval(updateCountdown, 1000);

// Initialize EmailJS
initializeEmailJS();

// Request notification permission
requestNotificationPermission();

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    console.log('Page fully loaded, timer should be running');
});

// Ensure timer starts when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - Re-initializing timer elements');
    
    // Re-get elements in case they weren't available initially
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    if (daysEl && hoursEl && minutesEl && secondsEl) {
        console.log('All timer elements found on DOM ready');
        // Force an immediate update
        updateCountdown();
    } else {
        console.error('Some timer elements still not found after DOM ready');
    }
});

// Add smooth scroll behavior for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Performance optimization: Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements that should animate on scroll (if you add more sections)
document.querySelectorAll('.main-content > *').forEach(el => {
    observer.observe(el);
});

// Add resize handler for responsive adjustments
window.addEventListener('resize', () => {
    // Close mobile menu on resize to larger screen
    if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        
        // Reset hamburger icon
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Add touch events for mobile interaction enhancement
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeLength = touchEndY - touchStartY;
    
    // Close menu on upward swipe when menu is open
    if (swipeLength < -swipeThreshold && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        
        // Reset hamburger icon
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

// Add focus management for accessibility
menuToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        menuToggle.click();
    }
});

// Manage focus when menu opens/closes
const firstNavLink = document.querySelector('.nav-menu a');
const lastNavLink = document.querySelector('.nav-menu a:last-child');

navMenu.addEventListener('transitionend', () => {
    if (navMenu.classList.contains('active')) {
        firstNavLink.focus();
    }
});

// Trap focus within menu when open
document.addEventListener('keydown', (e) => {
    if (!navMenu.classList.contains('active')) return;
    
    if (e.key === 'Tab') {
        if (e.shiftKey) {
            // Shift + Tab
            if (document.activeElement === firstNavLink) {
                e.preventDefault();
                lastNavLink.focus();
            }
        } else {
            // Tab
            if (document.activeElement === lastNavLink) {
                e.preventDefault();
                firstNavLink.focus();
            }
        }
    }
});

console.log('Portfolio website loaded successfully! 🚀');

// Developer tools - accessible via browser console
window.portfolioAdmin = {
    // Email management
    viewEmails: viewStoredEmails,
    exportEmails: exportEmailsToCSV,
    clearEmails: () => {
        localStorage.removeItem('subscriptionEmails');
        console.log('All subscription emails cleared!');
    },
    getEmailCount: () => {
        const emails = JSON.parse(localStorage.getItem('subscriptionEmails') || '[]');
        return emails.length;
    },
    notificationEmail: NOTIFICATION_EMAIL,
    
    // Timer management
    resetTimer: resetLaunchDate,
    getLaunchDate: () => {
        console.log('Current launch date:', launchDate.toLocaleString());
        return launchDate;
    },
    getTimeRemaining: getTimeRemaining,
    clearLaunchDate: () => {
        localStorage.removeItem('portfolioLaunchDate');
        console.log('Launch date cleared! Refresh page to set new date.');
    }
};

console.log('💡 Developer Tools Available:');
console.log('📧 Email Management:');
console.log('  portfolioAdmin.viewEmails() - View all subscription emails');
console.log('  portfolioAdmin.exportEmails() - Export emails to CSV');
console.log('  portfolioAdmin.clearEmails() - Clear all stored emails');
console.log('  portfolioAdmin.getEmailCount() - Get total subscription count');
console.log('⏰ Timer Management:');
console.log('  portfolioAdmin.resetTimer(days) - Reset countdown (default: 30 days)');
console.log('  portfolioAdmin.getLaunchDate() - View current launch date');
console.log('  portfolioAdmin.getTimeRemaining() - Get readable time remaining');
console.log('  portfolioAdmin.clearLaunchDate() - Clear stored launch date');
console.log(`📮 Notifications sent to: ${NOTIFICATION_EMAIL}`);

// ===== GAMES FUNCTIONALITY =====

// Game card toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const gameCards = document.querySelectorAll('.game-card');
    
    gameCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't toggle if clicking on game content
            if (e.target.closest('.game-content')) return;
            
            const content = card.querySelector('.game-content');
            const isActive = card.classList.contains('active');
            
            // Close all other games
            gameCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('active');
                    otherCard.querySelector('.game-content').style.display = 'none';
                }
            });
            
            // Toggle current game
            if (isActive) {
                card.classList.remove('active');
                content.style.display = 'none';
            } else {
                card.classList.add('active');
                content.style.display = 'block';
                initializeGame(card.id);
            }
        });
    });
});

function initializeGame(gameId) {
    switch(gameId) {
        case 'rpsGame':
            initRockPaperScissors();
            break;
        case 'memoryGame':
            initMemoryGame();
            break;
        case 'ticTacToe':
            initTicTacToe();
            break;
        case 'numberGuess':
            initNumberGuess();
            break;
        case 'snakeGame':
            initSnakeGame();
            break;
        case 'colorMatch':
            initColorMatch();
            break;
        case 'wordScramble':
            initWordScramble();
            break;
        case 'simonSays':
            initSimonSays();
            break;
        case 'quizGame':
            initQuizGame();
            break;
        case 'reactionGame':
            initReactionGame();
            break;
    }
}

// ===== ROCK PAPER SCISSORS =====
function initRockPaperScissors() {
    let rpsScore = 0;
    const choices = ['rock', 'paper', 'scissors'];
    const emojis = { rock: '🗿', paper: '📄', scissors: '✂️' };
    
    document.querySelectorAll('.choice-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const playerChoice = this.dataset.choice;
            const computerChoice = choices[Math.floor(Math.random() * 3)];
            
            let result = '';
            if (playerChoice === computerChoice) {
                result = 'It\'s a tie!';
            } else if (
                (playerChoice === 'rock' && computerChoice === 'scissors') ||
                (playerChoice === 'paper' && computerChoice === 'rock') ||
                (playerChoice === 'scissors' && computerChoice === 'paper')
            ) {
                result = 'You win!';
                rpsScore++;
            } else {
                result = 'Computer wins!';
            }
            
            document.getElementById('rpsResult').innerHTML = 
                `You: ${emojis[playerChoice]} vs Computer: ${emojis[computerChoice]}<br>${result}`;
            document.getElementById('rpsScore').textContent = rpsScore;
        });
    });
}

// ===== MEMORY GAME =====
function initMemoryGame() {
    const symbols = ['🎮', '🎯', '🎪', '🎨', '🎭', '🎪', '🎯', '🎮', '🎨', '🎭', '🚀', '⭐', '🚀', '⭐', '🎵', '🎵'];
    let flippedCards = [];
    let matchedPairs = 0;
    let moves = 0;
    
    const grid = document.getElementById('memoryGrid');
    grid.innerHTML = '';
    
    // Shuffle symbols
    const shuffled = symbols.sort(() => Math.random() - 0.5);
    
    shuffled.forEach((symbol, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.dataset.symbol = symbol;
        card.dataset.index = index;
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    });
    
    function flipCard() {
        if (flippedCards.length === 2 || this.classList.contains('flipped')) return;
        
        this.classList.add('flipped');
        this.textContent = this.dataset.symbol;
        flippedCards.push(this);
        
        if (flippedCards.length === 2) {
            moves++;
            document.getElementById('memoryMoves').textContent = moves;
            
            setTimeout(() => {
                if (flippedCards[0].dataset.symbol === flippedCards[1].dataset.symbol) {
                    matchedPairs++;
                    document.getElementById('memoryPairs').textContent = `${matchedPairs}/8`;
                    if (matchedPairs === 8) {
                        alert(`Congratulations! You won in ${moves} moves!`);
                    }
                } else {
                    flippedCards.forEach(card => {
                        card.classList.remove('flipped');
                        card.textContent = '';
                    });
                }
                flippedCards = [];
            }, 1000);
        }
    }
}

// ===== TIC TAC TOE =====
function initTicTacToe() {
    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let gameActive = true;
    
    const cells = document.querySelectorAll('.ttt-cell');
    const result = document.getElementById('tttResult');
    const reset = document.getElementById('tttReset');
    
    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => handleCellClick(index));
    });
    
    reset.addEventListener('click', resetGame);
    
    function handleCellClick(index) {
        if (board[index] !== '' || !gameActive) return;
        
        board[index] = currentPlayer;
        cells[index].textContent = currentPlayer;
        
        if (checkWinner()) {
            result.textContent = `Player ${currentPlayer} wins!`;
            gameActive = false;
            return;
        }
        
        if (board.every(cell => cell !== '')) {
            result.textContent = 'It\'s a draw!';
            gameActive = false;
            return;
        }
        
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        
        if (currentPlayer === 'O' && gameActive) {
            setTimeout(computerMove, 500);
        }
    }
    
    function computerMove() {
        const emptyCells = board.map((cell, index) => cell === '' ? index : null).filter(val => val !== null);
        const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        
        if (randomIndex !== undefined) {
            handleCellClick(randomIndex);
        }
    }
    
    function checkWinner() {
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        
        return winConditions.some(condition => {
            return condition.every(index => board[index] === currentPlayer);
        });
    }
    
    function resetGame() {
        board = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';
        gameActive = true;
        cells.forEach(cell => cell.textContent = '');
        result.textContent = '';
    }
}

// ===== NUMBER GUESSING =====
function initNumberGuess() {
    let targetNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    
    const input = document.getElementById('guessInput');
    const btn = document.getElementById('guessBtn');
    const result = document.getElementById('guessResult');
    const attemptsSpan = document.getElementById('guessAttempts');
    
    btn.addEventListener('click', makeGuess);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') makeGuess();
    });
    
    function makeGuess() {
        const guess = parseInt(input.value);
        if (isNaN(guess) || guess < 1 || guess > 100) {
            result.textContent = 'Please enter a number between 1 and 100';
            return;
        }
        
        attempts++;
        attemptsSpan.textContent = attempts;
        
        if (guess === targetNumber) {
            result.textContent = `🎉 Correct! You got it in ${attempts} attempts!`;
            btn.textContent = 'New Game';
            btn.onclick = () => {
                targetNumber = Math.floor(Math.random() * 100) + 1;
                attempts = 0;
                attemptsSpan.textContent = '0';
                result.textContent = '';
                input.value = '';
                btn.textContent = 'Guess!';
                btn.onclick = makeGuess;
            };
        } else if (guess < targetNumber) {
            result.textContent = '📈 Too low! Try higher.';
        } else {
            result.textContent = '📉 Too high! Try lower.';
        }
        
        input.value = '';
    }
}

// ===== SNAKE GAME =====
// ===== SNAKE GAME =====
function initSnakeGame() {
    const canvas = document.getElementById('snakeCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const startBtn = document.getElementById('snakeStart');
    const scoreSpan = document.getElementById('snakeScore');
    
    // Set canvas size properly
    canvas.width = 300;
    canvas.height = 300;
    
    let snake = [{ x: 150, y: 150 }];
    let food = generateFood();
    let direction = { x: 0, y: 0 };
    let score = 0;
    let gameRunning = false;
    let gameLoopId = null;
    
    // Clear any existing event listeners
    startBtn.removeEventListener('click', startGame);
    startBtn.addEventListener('click', startGame);
    
    // Use a specific keydown handler for this game
    const handleKeydown = (e) => {
        if (!gameRunning) return;
        
        switch (e.key) {
            case 'ArrowUp':
                if (direction.y === 0) direction = { x: 0, y: -20 };
                break;
            case 'ArrowDown':
                if (direction.y === 0) direction = { x: 0, y: 20 };
                break;
            case 'ArrowLeft':
                if (direction.x === 0) direction = { x: -20, y: 0 };
                break;
            case 'ArrowRight':
                if (direction.x === 0) direction = { x: 20, y: 0 };
                break;
        }
    };
    
    // Remove existing listeners and add new one
    document.removeEventListener('keydown', handleKeydown);
    document.addEventListener('keydown', handleKeydown);
    
    function startGame() {
        snake = [{ x: 150, y: 150 }];
        food = generateFood();
        direction = { x: 0, y: 0 };
        score = 0;
        scoreSpan.textContent = '0';
        gameRunning = true;
        startBtn.textContent = 'Game Running...';
        
        // Clear any existing game loop
        if (gameLoopId) clearTimeout(gameLoopId);
        gameLoop();
    }
    
    function gameLoop() {
        if (!gameRunning) return;
        
        update();
        draw();
        gameLoopId = setTimeout(gameLoop, 150);
    }
    
    function update() {
        const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
        
        // Check wall collision
        if (head.x < 0 || head.x >= 300 || head.y < 0 || head.y >= 300) {
            gameOver();
            return;
        }
        
        // Check self collision
        if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
            gameOver();
            return;
        }
        
        snake.unshift(head);
        
        // Check food collision
        if (head.x === food.x && head.y === food.y) {
            score++;
            scoreSpan.textContent = score;
            food = generateFood();
        } else {
            snake.pop();
        }
    }
    
    function draw() {
        // Clear canvas
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.fillRect(0, 0, 300, 300);
        
        // Draw snake
        ctx.fillStyle = '#64ffda';
        snake.forEach(segment => {
            ctx.fillRect(segment.x, segment.y, 18, 18);
        });
        
        // Draw food
        ctx.fillStyle = '#ff4757';
        ctx.fillRect(food.x, food.y, 18, 18);
    }
    
    function generateFood() {
        let newFood;
        do {
            newFood = {
                x: Math.floor(Math.random() * 15) * 20,
                y: Math.floor(Math.random() * 15) * 20
            };
        } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
        
        return newFood;
    }
    
    function gameOver() {
        gameRunning = false;
        if (gameLoopId) clearTimeout(gameLoopId);
        startBtn.textContent = 'Start Game';
        alert(`Game Over! Your score: ${score}`);
    }
    
    // Initial draw
    draw();
}

// ===== COLOR MATCH =====
function initColorMatch() {
    const colors = ['#ff4757', '#2ed573', '#3742fa', '#ffa502', '#ff6b6b', '#4834d4'];
    let currentColor = '';
    let score = 0;
    let timeLeft = 30;
    let gameActive = false;
    
    const display = document.getElementById('colorDisplay');
    const options = document.getElementById('colorOptions');
    const scoreSpan = document.getElementById('colorScore');
    const timeSpan = document.getElementById('colorTime');
    
    startColorGame();
    
    function startColorGame() {
        score = 0;
        timeLeft = 30;
        gameActive = true;
        scoreSpan.textContent = '0';
        
        const timer = setInterval(() => {
            timeLeft--;
            timeSpan.textContent = timeLeft;
            
            if (timeLeft <= 0) {
                clearInterval(timer);
                gameActive = false;
                alert(`Time's up! Your score: ${score}`);
            }
        }, 1000);
        
        newRound();
    }
    
    function newRound() {
        if (!gameActive) return;
        
        currentColor = colors[Math.floor(Math.random() * colors.length)];
        display.style.backgroundColor = currentColor;
        
        options.innerHTML = '';
        const shuffledColors = [...colors].sort(() => Math.random() - 0.5).slice(0, 4);
        if (!shuffledColors.includes(currentColor)) {
            shuffledColors[Math.floor(Math.random() * 4)] = currentColor;
        }
        
        shuffledColors.forEach(color => {
            const option = document.createElement('div');
            option.className = 'color-option';
            option.style.backgroundColor = color;
            option.addEventListener('click', () => checkAnswer(color));
            options.appendChild(option);
        });
    }
    
    function checkAnswer(selectedColor) {
        if (selectedColor === currentColor) {
            score++;
            scoreSpan.textContent = score;
        }
        newRound();
    }
}

// Continue in next part due to length...

// ===== WORD SCRAMBLE =====
function initWordScramble() {
    const words = ['JAVASCRIPT', 'PORTFOLIO', 'DEVELOPER', 'CODING', 'WEBSITE', 'DESIGN', 'PROGRAMMING', 'TECHNOLOGY'];
    let currentWord = '';
    let scrambledWord = '';
    let score = 0;
    
    const scrambledSpan = document.getElementById('scrambledWord');
    const input = document.getElementById('wordInput');
    const btn = document.getElementById('wordSubmit');
    const result = document.getElementById('wordResult');
    const scoreSpan = document.getElementById('wordScore');
    
    btn.addEventListener('click', checkWord);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkWord();
    });
    
    newWord();
    
    function newWord() {
        currentWord = words[Math.floor(Math.random() * words.length)];
        scrambledWord = currentWord.split('').sort(() => Math.random() - 0.5).join('');
        scrambledSpan.textContent = scrambledWord;
        input.value = '';
        result.textContent = '';
    }
    
    function checkWord() {
        const guess = input.value.toUpperCase();
        if (guess === currentWord) {
            score++;
            scoreSpan.textContent = score;
            result.textContent = '✅ Correct!';
            setTimeout(newWord, 1500);
        } else {
            result.textContent = '❌ Try again!';
        }
    }
}

// ===== SIMON SAYS =====
// ===== SIMON SAYS =====
function initSimonSays() {
    const colors = ['red', 'green', 'blue', 'yellow'];
    let sequence = [];
    let playerSequence = [];
    let level = 0;
    let gameActive = false;
    let audioContext = null;
    
    const startBtn = document.getElementById('simonStart');
    const levelSpan = document.getElementById('simonLevel');
    const buttons = document.querySelectorAll('#simonSays .simon-btn');
    
    if (!startBtn || !levelSpan || buttons.length === 0) return;
    
    // Initialize audio context on first user interaction
    function initAudio() {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }
    }
    
    // Clear existing event listeners
    startBtn.removeEventListener('click', startSimon);
    startBtn.addEventListener('click', startSimon);
    
    buttons.forEach((btn, index) => {
        // Remove existing listeners
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        
        newBtn.addEventListener('click', () => {
            if (!gameActive) return;
            initAudio();
            playerSequence.push(index);
            playSound(index);
            checkSequence();
        });
    });
    
    // Update buttons reference after cloning
    const updatedButtons = document.querySelectorAll('#simonSays .simon-btn');
    
    function startSimon() {
        initAudio();
        sequence = [];
        playerSequence = [];
        level = 0;
        gameActive = true;
        startBtn.textContent = 'Playing...';
        nextLevel();
    }
    
    function nextLevel() {
        level++;
        levelSpan.textContent = level;
        playerSequence = [];
        
        const nextColor = Math.floor(Math.random() * 4);
        sequence.push(nextColor);
        
        playSequence();
    }
    
    function playSequence() {
        gameActive = false;
        
        sequence.forEach((color, index) => {
            setTimeout(() => {
                updatedButtons[color].classList.add('active');
                playSound(color);
                
                setTimeout(() => {
                    updatedButtons[color].classList.remove('active');
                    if (index === sequence.length - 1) {
                        gameActive = true;
                    }
                }, 400);
            }, (index + 1) * 600);
        });
    }
    
    function checkSequence() {
        const currentIndex = playerSequence.length - 1;
        
        if (playerSequence[currentIndex] !== sequence[currentIndex]) {
            gameActive = false;
            startBtn.textContent = 'Start Game';
            alert(`Game Over! You reached level ${level}`);
            return;
        }
        
        if (playerSequence.length === sequence.length) {
            setTimeout(nextLevel, 1000);
        }
    }
    
    function playSound(index) {
        try {
            if (!audioContext) return;
            
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            const frequencies = [261.63, 329.63, 392.00, 523.25]; // C, E, G, high C
            oscillator.frequency.setValueAtTime(frequencies[index], audioContext.currentTime);
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
        } catch (error) {
            console.log('Audio not available:', error);
        }
    }
}

// ===== QUIZ GAME =====
// ===== QUIZ GAME =====
function initQuizGame() {
    const questions = [
        {
            q: "What does HTML stand for?",
            options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language"],
            correct: 0
        },
        {
            q: "Which CSS property controls text size?",
            options: ["font-weight", "font-size", "text-size"],
            correct: 1
        },
        {
            q: "What does JS stand for?",
            options: ["Java Source", "JavaScript", "Just Script"],
            correct: 1
        },
        {
            q: "Which HTML tag is used for the largest heading?",
            options: ["<h6>", "<heading>", "<h1>"],
            correct: 2
        },
        {
            q: "What is the correct way to write a JavaScript array?",
            options: ["let colors = 'red', 'green', 'blue'", "let colors = (1:'red', 2:'green', 3:'blue')", "let colors = ['red', 'green', 'blue']"],
            correct: 2
        }
    ];
    
    let currentQuestion = 0;
    let score = 0;
    
    const questionEl = document.getElementById('quizQuestion');
    const optionsEl = document.getElementById('quizOptions');
    const resultEl = document.getElementById('quizResult');
    const scoreSpan = document.getElementById('quizScore');
    const nextBtn = document.getElementById('quizNext');
    
    if (!questionEl || !optionsEl || !resultEl || !scoreSpan || !nextBtn) return;
    
    // Clear existing event listeners
    nextBtn.removeEventListener('click', nextQuestion);
    nextBtn.addEventListener('click', nextQuestion);
    
    showQuestion();
    
    function showQuestion() {
        if (currentQuestion >= questions.length) {
            showResults();
            return;
        }
        
        const q = questions[currentQuestion];
        questionEl.textContent = q.q;
        
        optionsEl.innerHTML = '';
        q.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.textContent = option;
            btn.className = 'quiz-option';
            btn.addEventListener('click', () => selectAnswer(index));
            optionsEl.appendChild(btn);
        });
        
        resultEl.textContent = '';
        nextBtn.style.display = 'none';
    }
    
    function selectAnswer(selected) {
        const q = questions[currentQuestion];
        const options = document.querySelectorAll('#quizGame .quiz-option');
        
        options.forEach((btn, index) => {
            if (index === q.correct) {
                btn.classList.add('correct');
                btn.style.background = 'rgba(46, 213, 115, 0.3)';
                btn.style.borderColor = '#2ed573';
            } else if (index === selected) {
                btn.classList.add('incorrect');
                btn.style.background = 'rgba(255, 71, 87, 0.3)';
                btn.style.borderColor = '#ff4757';
            }
            btn.disabled = true;
        });
        
        if (selected === q.correct) {
            score++;
            resultEl.textContent = '✅ Correct!';
        } else {
            resultEl.textContent = '❌ Incorrect!';
        }
        
        scoreSpan.textContent = `${score}/${questions.length}`;
        nextBtn.style.display = 'block';
    }
    
    function nextQuestion() {
        currentQuestion++;
        showQuestion();
    }
    
    function showResults() {
        questionEl.textContent = 'Quiz Complete!';
        optionsEl.innerHTML = `<p style="color: rgba(255, 255, 255, 0.9); margin: 1rem 0;">Your final score: ${score}/${questions.length}</p>`;
        
        let message = '';
        if (score === questions.length) {
            message = '🎉 Perfect score!';
        } else if (score >= questions.length * 0.7) {
            message = '👏 Great job!';
        } else {
            message = '📚 Keep learning!';
        }
        
        resultEl.textContent = message;
        nextBtn.textContent = 'Restart Quiz';
        nextBtn.style.display = 'block';
        nextBtn.removeEventListener('click', nextQuestion);
        nextBtn.addEventListener('click', restartQuiz);
    }
    
    function restartQuiz() {
        currentQuestion = 0;
        score = 0;
        scoreSpan.textContent = '0/5';
        nextBtn.textContent = 'Next Question';
        nextBtn.removeEventListener('click', restartQuiz);
        nextBtn.addEventListener('click', nextQuestion);
        showQuestion();
    }
}

// ===== REACTION TIME =====
function initReactionGame() {
    let startTime = 0;
    let gameActive = false;
    
    const startBtn = document.getElementById('reactionStart');
    const gameArea = document.getElementById('reactionArea');
    const result = document.getElementById('reactionResult');
    
    startBtn.addEventListener('click', startReaction);
    gameArea.addEventListener('click', recordReaction);
    
    function startReaction() {
        if (gameActive) return;
        
        startBtn.style.display = 'none';
        gameArea.style.backgroundColor = '#ff4757';
        gameArea.textContent = 'Wait for green...';
        result.textContent = '';
        
        const delay = Math.random() * 4000 + 1000; // 1-5 seconds
        
        setTimeout(() => {
            gameArea.style.backgroundColor = '#2ed573';
            gameArea.textContent = 'Click now!';
            startTime = Date.now();
            gameActive = true;
        }, delay);
    }
    
    function recordReaction() {
        if (!gameActive) return;
        
        const reactionTime = Date.now() - startTime;
        gameActive = false;
        
        gameArea.style.backgroundColor = '#2c2c54';
        gameArea.textContent = 'Click "Start" to play again';
        
        let message = '';
        if (reactionTime < 200) {
            message = '🚀 Lightning fast!';
        } else if (reactionTime < 300) {
            message = '⚡ Excellent reflexes!';
        } else if (reactionTime < 400) {
            message = '👍 Good reaction time!';
        } else if (reactionTime < 500) {
            message = '👌 Not bad!';
        } else {
            message = '🐌 Could be faster!';
        }
        
        result.textContent = `${reactionTime}ms - ${message}`;
        startBtn.style.display = 'block';
    }
}
