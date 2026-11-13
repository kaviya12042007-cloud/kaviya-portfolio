

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.background = 'rgba(7,7,20,0.95)';
    header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
  } else {
    header.style.background = 'rgba(7,7,20,0.85)';
    header.style.boxShadow = 'none';
  }
});


const titles = ["Aspiring Front-End Developer", "CSE Student", "Web Developer"];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const heroTitle = document.querySelector('.hero h1 span');

function typeEffect() {
  if (!heroTitle) return;
  const currentTitle = titles[titleIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  heroTitle.textContent = currentTitle.substring(0, charIndex);

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentTitle.length) {
    speed = 1500;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    titleIndex = (titleIndex + 1) % titles.length;
    speed = 500;
  }

  setTimeout(typeEffect, speed);
}
typeEffect();

const sections = document.querySelectorAll('section, .hero-left, .hero-right');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

sections.forEach(sec => {
  sec.style.opacity = '0';
  sec.style.transform = 'translateY(30px)';
  sec.style.transition = 'all 0.7s ease';
  observer.observe(sec);
});

// Hero always visible first
document.querySelector('.hero-left').style.opacity = '1';
document.querySelector('.hero-left').style.transform = 'translateY(0)';
document.querySelector('.hero-right').style.opacity = '1';
document.querySelector('.hero-right').style.transform = 'translateY(0
document.querySelectorAll('.skill-box').forEach(box => {
  box.addEventListener('click', () => {
    box.style.borderColor = '#00e5ff';
    box.style.boxShadow = '0 0 20px rgba(0,229,255,0.4)';
    setTimeout(() => {
      box.style.borderColor = '#24244a';
      box.style.boxShadow = 'none';
    }, 800);
  });
})

document.querySelectorAll('.project').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.background = `radial-gradient(circle at ${x}px ${y}px, #1f1f45 0%, #14142a 60%)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.background = '#14142a';
  });
});


console.log("Welcome to Kaviya B Portfolio - B.E CSE, Mahendra Engineering College for Women");



<script src="script.js"></script>
</body>
</html>