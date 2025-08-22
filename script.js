// Staggered cards
const staggerCards = document.querySelectorAll(".stagger-fade");
const cardObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 150);
        cardObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

staggerCards.forEach((card) => cardObserver.observe(card));

// typed-text
const typedText = document.getElementById("typed-text");
const options = {
  strings: [
    "Founder and CEO of Make Code Easy",
    "Bronze Medalist of IIT Bombay Campus Ambassador",
    "Face of Internshala",
    "CA and Face of Physics Wallah",
    "Passionate Educator and Tech Mentor",
    "Bridging Classroom to Career Gap",
  ],
  typeSpeed: 30,
  backSpeed: 25,
  loop: true,
};
const typed = new Typed(typedText, options);
