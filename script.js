const toggleButton = document.querySelector('.dark-mode-toggle');
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        document.documentElement.style.setProperty('--dark-bg', '#ffffff');
        toggleButton.textContent = 'Toggle Dark Mode';
    } else {
        document.documentElement.style.setProperty('--dark-bg', '#121212');
        toggleButton.textContent = 'Toggle Light Mode';
    }
});
hamburger.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

hamburger.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menu.style.display = 'flex'; 
    } else {
        menu.style.display = 'none'; 
    }
});
