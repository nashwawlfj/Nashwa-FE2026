const modeTonggle = document.querySelector("#modeToggle");

modeTonggle.addEventListener("click", function() {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        modeTonggle.textContent = "Mode Terang";
    } else {
        modeTonggle.textContent = "Mode Gelap";
    }
});