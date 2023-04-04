document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const inputWrap = document.querySelector(".input-wrap");
  const errorIcon = document.querySelector('img[alt="icon-error"]');
  const errorText = document.getElementById("error-email");

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const updateStyles = (valid) => {
    inputWrap.style.border = valid ? "" : "2px solid hsl(0, 93%, 68%)";
    errorIcon.style.display = valid ? "none" : "inline";
    errorText.textContent = valid ? "" : "Please provide a valid email";
  };

  emailInput.addEventListener("input", () =>
    updateStyles(validateEmail(emailInput.value))
  );
  emailInput.form.addEventListener("submit", (e) => {
    if (!validateEmail(emailInput.value)) {
      e.preventDefault();
      updateStyles(false);
    }
  });
});
