// loadComponents.js
// Function to load external HTML components into placeholders
function loadComponent(id, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => {
            console.error(`Error loading ${url}:`, error);
        });
}

// Load components
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('navbar-placeholder', 'navbar.html');
    loadComponent('sidebar-placeholder', 'toc.html');
    loadComponent('footer-placeholder', 'footer.html');
});