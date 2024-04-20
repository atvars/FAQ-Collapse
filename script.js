// getting my buttons
const toggles = document.querySelectorAll('.faq-toggle');

// for each button on the click for parent we toggle active class
toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});
