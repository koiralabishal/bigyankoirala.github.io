// Get the setting button, settings menu, and body
const settingsButton = document.querySelector('.template-config');
const settingsMenu = document.querySelector('.set-menu');
const body = document.body;

// Show the settings menu when the button is clicked
settingsButton.addEventListener('click', function(event) {
  // Prevent click event from propagating to body and hiding the menu
  event.stopPropagation();

  // Toggle visibility of the settings menu
  settingsMenu.style.display = (settingsMenu.style.display === 'block') ? 'none' : 'block';
  settingsButton.style.display = 'none'; // Hide the button
});

// Hide the settings menu when clicking anywhere outside the settings menu or button
body.addEventListener('click', function(event) {
  // Check if the clicked area is outside the settings menu or settings button
  if (!settingsMenu.contains(event.target) && event.target !== settingsButton) {
    settingsMenu.style.display = 'none'; // Hide the menu
    settingsButton.style.display = 'block'; // Hide the button
  }
});

// Prevent the settings menu from closing when clicking inside the menu
settingsMenu.addEventListener('click', function(event) {
  event.stopPropagation();
});
