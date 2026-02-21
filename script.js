// Fix smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Toggle planes Estudiante / Adulto
function showPlans(type) {
  document.getElementById("planes-estudiante").classList.toggle("plan-hidden", type !== "estudiante");
  document.getElementById("planes-adulto").classList.toggle("plan-hidden", type !== "adulto");
  document.querySelectorAll(".toggle-btn").forEach((btn, i) => {
    btn.classList.toggle("active", (i === 0 && type === "estudiante") || (i === 1 && type === "adulto"));
  });
}

// Animaciones fade-in con IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));