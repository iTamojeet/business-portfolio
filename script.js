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
    rootMargin: "0px 0px -50px 0px", // Trigger slightly before element comes into view
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

// EmailJS Configuration and Form Handling
(function () {
  // 1) Init with your Public Key
  emailjs.init("dXZAMUNrtkBa3mMZK");

  // 2) Form submission handler
  window.handleQuery = function (event) {
    event.preventDefault();

    const form = event.target;
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.innerHTML;

    btn.innerHTML = '<i class="bi bi-hourglass-split me-1"></i>Sending...';
    btn.disabled = true;

    const formData = {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      subject:
        document.getElementById("subject").value ||
        "Feedback from MakeCodeEasy Portfolio Website",
      message: document.getElementById("message").value,
    };

    emailjs
      .send("service_zbxn1rg", "template_dsfr1tq", formData)
      .then(() => {
        showNotification(
          "Message sent successfully! We'll get back to you soon...😊",
          "success"
        );
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        showNotification(
          "Failed to send message. Please try again or contact us directly.",
          "error"
        );
      })
      .finally(() => {
        btn.innerHTML = original;
        btn.disabled = false;
      });

    return false;
  };

  function showNotification(message, type) {
    const el = document.createElement("div");
    el.className = `alert alert-${
      type === "success" ? "success" : "danger"
    } alert-dismissible fade show position-fixed`;
    el.style.cssText =
      "top: 20px; right: 20px; z-index: 9999; min-width: 300px;";
    el.innerHTML = `
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 5000);
  }
})();
