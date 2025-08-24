

// ✅ Footer Links Smooth Scroll
document.querySelectorAll(".footer-link").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
  currentTestimonial = index;
}

window.showTestimonial = showTestimonial;

window.addEventListener('load', () => {
  showTestimonial(0);
  setInterval(() => {
    const next = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(next);
  }, 5000);
});


document.addEventListener("DOMContentLoaded", () => {
  const sendBtn = document.getElementById("sendBtn");
  const nameInput = document.getElementById("contactName");
  const emailInput = document.getElementById("contactEmail");
  const messageInput = document.getElementById("contactMessage");
  const modal = document.getElementById("contactModal");
  const closeModal = document.getElementById("closeModal");

  if (sendBtn && modal && closeModal) {
    sendBtn.addEventListener("click", (e) => {
      e.preventDefault();

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }

      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // ✅ Show modal
      modal.style.display = "block";
      document.body.style.overflow = "hidden"; // Prevent scroll

      // Reset form
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    });

    // Close modal on button click
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.style.overflow = ""; // Restore scroll
    });

    // Close modal if clicked outside content
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = ""; // Restore scroll
      }
    });
  } else {
    console.error("Modal or button elements not found in DOM.");
  }
});


  // ======================
  // SUBSCRIBE FORM FUNCTIONALITY
  // ======================
  const subscribeForm = document.querySelector(".subscribe-form");
  if (subscribeForm) {
    subscribeForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const emailInput = subscribeForm.querySelector("input[type='email']");
      const email = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email) {
        alert("Please enter your email address.");
      } else if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
      } else {
        alert(`Subscribed successfully with email: ${email}`);
        emailInput.value = "";
      }
    });
  }


// ======================
// VIDEO PLAY FUNCTIONALITY
// ======================
const playBtn = document.getElementById("playBtn");
const videoThumb = document.getElementById("videoThumb");
const featureVideo = document.getElementById("featureVideo");

if (playBtn && videoThumb && featureVideo) {
  playBtn.addEventListener("click", () => {
    videoThumb.style.display = "none";
    playBtn.style.display = "none";
    featureVideo.style.display = "block";

    setTimeout(() => {
      featureVideo.style.opacity = "1";
      featureVideo.play();
    }, 50);
  });
}



// ======================
// LEAFLET MAP FUNCTIONALITY
// ======================
const mapPreview = document.getElementById("mapPreview");
if (mapPreview) {
  mapPreview.addEventListener("click", () => {
    const container = document.getElementById("map-container");

    // Replace image with Google Maps iframe
    container.innerHTML = `
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30773484.55170563!2d61.0245165611659!3d19.69009515037612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1753034191164!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  });
}



document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".cta-button").forEach(button => {
    button.addEventListener("click", () => {
      const pricingSection = document.getElementById("pricing");
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".cta-buttons").forEach(button => {
    button.addEventListener("click", () => {
      const pricingSection = document.getElementById("pricing");
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("featureVideo");
  const playIcon = document.getElementById("playIcon");

  if (video && playIcon) {
    // Show play icon initially
    playIcon.style.display = "block";

    // Toggle play/pause on wrapper click
    document.getElementById("videoWrapper").addEventListener("click", () => {
      if (video.paused) {
        video.play();
        playIcon.style.display = "none";
      } else {
        video.pause();
        playIcon.style.display = "block";
      }
    });

    // Also show play icon when video ends
    video.addEventListener("ended", () => {
      playIcon.style.display = "block";
    });
  }
});

