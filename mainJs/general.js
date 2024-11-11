
// -- move upper right click disable --
document.getElementById("floatingImage").addEventListener("contextmenu", (e) => {
    e.preventDefault();
    // alert("Right-click is disabled.");
});

// -- portpholio's photos right click disable --
document.querySelectorAll('.slide').forEach((img) => {
    img.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        // alert("Right-click is disabled on this image.");
    });
});

// --- logo disable logo right click ---
document.getElementById("logo_photo").addEventListener("contextmenu", (e) => {
    e.preventDefault();
    // alert("Right-click is disabled.");
});