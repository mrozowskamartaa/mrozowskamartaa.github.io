// Theme Switcher
const lightBtn = document.getElementById('light-btn');
const darkBtn = document.getElementById('dark-btn');
const body = document.body;

// Load saved theme or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

// Event listeners
if (lightBtn && darkBtn) {
    lightBtn.addEventListener('click', () => setTheme('light'));
    darkBtn.addEventListener('click', () => setTheme('dark'));
}

function setTheme(theme) {
    if (theme === 'dark') {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        if (lightBtn && darkBtn) {
            lightBtn.classList.remove('active');
            darkBtn.classList.add('active');
        }
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        if (lightBtn && darkBtn) {
            darkBtn.classList.remove('active');
            lightBtn.classList.add('active');
        }
    }
    localStorage.setItem('theme', theme);
}

// Handle profile image error (show placeholder if image doesn't exist)
const profileImg = document.getElementById('profile-img');
if (profileImg) {
    profileImg.addEventListener('error', function() {
        this.style.display = 'none';
        this.parentElement.style.background = 'var(--bg-secondary)';
        this.parentElement.innerHTML = '<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: var(--text-secondary); font-size: 0.9rem;">Add profile.jpg</div>';
    });
}
