// Bidirectional staggered animations
const staggerCards = document.querySelectorAll(".stagger-fade");
const cardObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Animate in when scrolling down
        setTimeout(() => {
          entry.target.classList.add("visible");
          entry.target.classList.remove("hidden");
        }, i * 150);
      } else {
        // Animate out when scrolling back up
        setTimeout(() => {
          entry.target.classList.remove("visible");
          entry.target.classList.add("hidden");
        }, i * 100);
      }
    });
  },
  { 
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px" // Trigger slightly before element comes into view
  }
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
