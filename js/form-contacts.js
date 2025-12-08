document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contacts__form");
  if (!form) return;

  const nameInput = document.getElementById("user-name");
  const emailInput = document.getElementById("user-email");
  const commentInput = document.getElementById("user-comment");
  const checkbox = document.getElementById("terms");
  const sendBtn = form.querySelector(".form__btn");

  const dialogSuccess = document.getElementById("success-dialog");
  const dialogError = document.getElementById("error-dialog");

  if (!checkbox || !sendBtn) return;

  function updateButtonState() {
    sendBtn.disabled = !checkbox.checked;
  }
  updateButtonState();

  checkbox.addEventListener("change", updateButtonState);

  function markInvalid(input) {
    if (input) input.style.border = "1px solid red";
  }

  function clearInvalid(input) {
    if (input) input.style.border = "";
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!checkbox.checked) return;

    let valid = true;

    if (!nameInput.value.trim()) {
      markInvalid(nameInput);
      valid = false;
    } else clearInvalid(nameInput);

    if (!emailInput.value.trim()) {
      markInvalid(emailInput);
      valid = false;
    } else clearInvalid(emailInput);

    if (!valid) return;

    const formData = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      comment: commentInput?.value.trim() || "",
    };

    try {
      const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        form.reset();
        updateButtonState();
        clearInvalid(nameInput);
        clearInvalid(emailInput);

        if (dialogSuccess) {
          dialogSuccess.showModal();
          setTimeout(() => dialogSuccess.close(), 5000);
        }
      } else {
        if (dialogError) {
          dialogError.showModal();
          setTimeout(() => dialogError.close(), 5000);
        }
      }
    } catch (err) {
      if (dialogError) {
        dialogError.showModal();
        setTimeout(() => dialogError.close(), 5000);
      }
    }
  });
});
