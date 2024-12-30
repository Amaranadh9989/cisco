//tb view toggle 

// Get elements for the toggle button, menu, icons, and menu text
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.mobile-main-header-nav');
const openIcon = document.getElementById('open-icon');
const closeIcon = document.getElementById('close-icon');
const menuText = document.querySelector('.mobile-toggle-menu'); // "Menu" text element
const closeText = document.querySelector('.mobile-toggle-close'); // "Close" text element

// Add event listener for the mobile toggle button
mobileToggle.addEventListener('click', () => {
    // Toggle the menu visibility
    navMenu.classList.toggle('open');

    // Toggle icons visibility
    openIcon.style.display = navMenu.classList.contains('open') ? 'none' : 'block';
    closeIcon.style.display = navMenu.classList.contains('open') ? 'block' : 'none';

    // Toggle text between "Menu" and "Close"
    menuText.style.display = navMenu.classList.contains('open') ? 'none' : 'block'; // Hide "Menu" when open
    closeText.style.display = navMenu.classList.contains('open') ? 'block' : 'none'; // Show "Close" when open
});


//mobile view toggle
const tabToggle = document.querySelector('.tab-toggle');
const navMenu1 = document.querySelector('.mobile-main-header-nav');
const openIcon1 = document.getElementById('tab-open-icon');
const closeIcon1 = document.getElementById('tab-close-icon');


// Add event listener for the tab toggle button
tabToggle.addEventListener('click', () => {
    // Toggle the menu visibility
    navMenu1.classList.toggle('open');

    // Toggle icons visibility
    openIcon1.style.display = navMenu1.classList.contains('open') ? 'none' : 'block';
    closeIcon1.style.display = navMenu1.classList.contains('open') ? 'block' : 'none';
});

//Search button
/*
// Get the search link and the search bar popup element
const searchLink = document.getElementById('Search');
const searchBarPopup = document.querySelector('.search-bar-popup');
const searchCloseIcon = document.getElementById('search-close-icon');

// Add event listener to the search link
searchLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link behavior
    // Toggle the display of the search bar popup
    searchBarPopup.style.display = searchBarPopup.style.display === 'none' || !searchBarPopup.style.display
        ? 'block'
        : 'none';

});*/
const searchLink = document.getElementById('Search');
const searchBarPopup = document.querySelector('.search-bar-popup');
const searchCloseIcon = document.getElementById('search-close-icon');

// Function to toggle the popup visibility
function togglePopup() {
    if (searchBarPopup.style.display === 'block') {
        searchBarPopup.style.display = 'none'; // Hide the popup
    } else {
        searchBarPopup.style.display = 'block'; // Show the popup
    }
}

// Event listener for the search link (search icon)
searchLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link behavior
    togglePopup(); // Toggle the popup visibility
});

// Event listener for the close icon
searchCloseIcon.addEventListener('click', () => {
    searchBarPopup.style.display = 'none'; // Hide the popup
});


//mobile search
const mobileSearchLink = document.getElementById('mobile-search');
// Event listener for the search link (search icon)
mobileSearchLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link behavior
    togglePopup(); // Toggle the popup visibility
});

//mobile-view footer

document.getElementById('quick-minus').addEventListener('click', function () {
    document.getElementById('mobile-top-links').style.display = 'none';
    document.getElementById('quick-minus').style.display = 'none';
    document.getElementById('quick-plus').style.display = 'inline';
});

document.getElementById('quick-plus').addEventListener('click', function () {
    document.getElementById('mobile-top-links').style.display = 'flex';
    document.getElementById('quick-minus').style.display = 'inline';
    document.getElementById('quick-plus').style.display = 'none';
});

document.getElementById('resources-minus').addEventListener('click', function () {
    document.getElementById('mobile-footer-mid-container').style.display = 'none';
    document.getElementById('resources-minus').style.display = 'none';
    document.getElementById('resources-plus').style.display = 'inline';
});

document.getElementById('resources-plus').addEventListener('click', function () {
    document.getElementById('mobile-footer-mid-container').style.display = 'flex';
    document.getElementById('resources-minus').style.display = 'inline';
    document.getElementById('resources-plus').style.display = 'none';
});

