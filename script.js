// Tento kód čeká, až se načte celá HTML struktura stránky,
// a teprve potom spustí JavaScript uvnitř této funkce
document.addEventListener("DOMContentLoaded", () => {

    /* ===== FADE-IN ANIMACE ===== */
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
        });
    });
    elements.forEach(el => observer.observe(el));

    /* ===== GLOW EFEKT ===== */
    document.querySelectorAll(".grid img").forEach(img => {
        img.addEventListener("click", () => {
            img.classList.add("flash");
            setTimeout(() => img.classList.remove("flash"), 400);
        });
    });

    /* ===== MENU ===== */
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu-items");
    if(toggle && menu){
        toggle.addEventListener("click", () => menu.classList.toggle("open"));
    }

    /* ===== TLAČÍTKO INFO ===== */
    const infoBtn = document.getElementById("infoBtn");
    const infoText = document.getElementById("infoText");
    if(infoBtn && infoText){
        infoBtn.addEventListener("click", () => infoText.classList.toggle("show"));
    }

    /* ===== LIGHTBOX ===== */
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.getElementById("close");

    // otevirani jen pro galerei
    document.querySelectorAll(".clickable").forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
        });
    });

    // zavirani
    closeBtn.addEventListener("click", () => lightbox.style.display = "none");
    lightbox.addEventListener("click", e => {
        if(e.target === lightbox) lightbox.style.display = "none";
    });

});