// Game Configuration
const games = {
    '2048': {
        url: 'https://gabrielecirulli.github.io/2048/',
        title: '2048',
        description: 'A relaxing number puzzle game where you combine tiles to reach 2048. Perfect for a quick mental break!'
    },
    'tetris': {
        url: 'https://tetris-game.io/',
        title: 'Tetris',
        description: 'The classic block-stacking game that never gets old. Great for stress relief and improving focus!'
    },
    'snake': {
        url: 'https://playsnake.org/',
        title: 'Snake',
        description: 'A casual journey of growth and strategy. Simple yet addictive - perfect for quick gaming sessions!'
    }
};

// Current Game State
let currentGame = '2048';

// Show Game Function
function showGame(gameId) {
    if (!games[gameId]) return;

    // Update Game Cards
    document.querySelectorAll('.game-card').forEach(card => {
        card.classList.remove('active-game');
    });
    event.currentTarget.classList.add('active-game');

    // Update Game Info
    const gameInfo = document.getElementById('game-info');
    gameInfo.querySelector('h2').textContent = games[gameId].title;
    gameInfo.querySelector('p').textContent = games[gameId].description;

    // Update iframe
    const iframe = document.getElementById('game-frame');
    iframe.classList.add('loading');
    
    // Save current game to local storage
    localStorage.setItem('currentGame', gameId);
    currentGame = gameId;

    // Delayed iframe loading for smooth transition
    setTimeout(() => {
        iframe.src = games[gameId].url;
        iframe.onload = () => {
            iframe.classList.remove('loading');
            iframe.classList.add('loaded');
        };
    }, 300);
}

// Restore last played game on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedGame = localStorage.getItem('currentGame');
    if (savedGame && games[savedGame]) {
        showGame(savedGame);
    }
}); 