// Fade-in animace při scrollu
const elements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

elements.forEach(el => observer.observe(el));


// Glow efekt při kliknutí na obrázek
document.querySelectorAll(".image-placeholder").forEach(box => {
    box.addEventListener("click", () => {
        box.style.boxShadow = "0 0 60px rgba(0,255,255,0.9)";
        setTimeout(() => {
            box.style.boxShadow = "0 0 40px rgba(255,255,255,0.2)";
        }, 400);
    });
});