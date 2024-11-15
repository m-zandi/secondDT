function toggleMenu() {
    const sideMenu = document.getElementById("sideMenu").querySelector("ul");
    const menuToggle = document.getElementById("menuToggle");

    // Toggle the side menu's visibility
    if (sideMenu.style.left === "0px") {
        sideMenu.style.left = "-130%"; // Close the menu
        menuToggle.innerHTML = "☰"; // Change hamburger icon to open
    } else {
        sideMenu.style.left = "0"; // Open the menu
        menuToggle.innerHTML = "✕"; // Change to close icon
    }
}
