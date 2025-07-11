
// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Dark Mode Toggle
const toggleButton = document.createElement('button');
toggleButton.textContent = "Toggle Dark Mode";
toggleButton.style.cssText = `
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 8px 16px;
  background-color: #004aad;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  z-index: 1000;
`;
document.body.appendChild(toggleButton);

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
