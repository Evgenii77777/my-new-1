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

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!checkbox.checked) return;

    const formData = {
      name: nameInput?.value.trim() || "",
      email: emailInput?.value.trim() || "",
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
