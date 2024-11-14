
/* <script> */
function toggleMenu() {
    const sideMenu = document.getElementById("sideMenu").querySelector("ul");
    const menuToggle = document.getElementById("menuToggle");

    // Toggle the side menu's visibility
    if (sideMenu.style.left === "0px") {
        sideMenu.style.left = "-60%"; // Close the menu
        menuToggle.innerHTML = "☰"; // Change hamburger icon to open
    } else {
        sideMenu.style.left = "0"; // Open the menu
        menuToggle.innerHTML = "✕"; // Change to close icon
    }
}

    // </script>
// {/* <script> */}
// -- about us  menu click button --
function scrollToAbout() {
    const aboutUs = document.getElementById("aboutId");
    const offset = -230; // Adjust this value to bring it higher or lower
    const topPosition = aboutUs.getBoundingClientRect().top + window.pageYOffset + offset;

    window.scrollTo({
        top: topPosition,
        behavior: "smooth"
    });
}

// -- porfolio button --
function scrollToPortfolio() {
    const aboutUs = document.getElementById("portfolioId");
    const offset = 450; // Adjust this value to bring it higher or lower
    const topPosition = aboutUs.getBoundingClientRect().top + window.pageYOffset + offset;

    window.scrollTo({
        top: topPosition,
        behavior: "smooth"
    });
}

// -- products -- 
function scrollToProducts() {
    const aboutUs = document.getElementById("productsId");
    const offset = 0; // Adjust this value to bring it higher or lower
    const topPosition = aboutUs.getBoundingClientRect().top + window.pageYOffset + offset;

    window.scrollTo({
        top: topPosition,
        behavior: "smooth"
    });
}
//  -- move to address down in footer --
function scrollToFooter() {
    const aboutUs = document.getElementById("footerId");
    const offset = 0; // Adjust this value to bring it higher or lower
    const topPosition = aboutUs.getBoundingClientRect().top + window.pageYOffset + offset;

    window.scrollTo({
        top: topPosition,
        behavior: "smooth"
    });
}
    // </script>