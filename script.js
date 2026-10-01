// 1. DOM Manipulation untuk Mobile Hamburger Menu (Responsive Navigation)
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Toggle menu saat hamburger diklik
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// Menutup menu otomatis saat salah satu link diklik
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    });
});

// 2. DOM Manipulation untuk Efek Teks Dinamis di Hero Section
const dynamicTextElement = document.getElementById("dynamic-text");
const titles = ["Web Developer", "UI/UX Enthusiast", "Frontend Coder"];
let index = 0;

setInterval(() => {
    // Mengubah isi text setiap 2.5 detik
    index = (index + 1) % titles.length;
    
    // Memberikan efek fade (opsional) menggunakan inline style DOM
    dynamicTextElement.style.opacity = 0;
    
    setTimeout(() => {
        dynamicTextElement.textContent = titles[index];
        dynamicTextElement.style.opacity = 1;
        dynamicTextElement.style.transition = "opacity 0.5s ease-in-out";
    }, 500);

}, 3000);