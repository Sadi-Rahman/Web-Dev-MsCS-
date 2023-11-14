// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Get elements
  const changeBtn = document.querySelector(".change");
  const bodyEl = document.querySelector("body");

  // Bind click event
  changeBtn.addEventListener("click", function () {
    bodyEl.classList.toggle("dark");

    if (bodyEl.classList.contains("dark")) {
      changeBtn.textContent = "ON";
    } else {
      changeBtn.textContent = "OFF";
    }
  });
});
