document.addEventListener("DOMContentLoaded", function () {
  // Get elements
  const changeBtn = document.querySelector(".change");
  const bodyEl = document.querySelector("body");

  // Bind click event
  changeBtn.addEventListener("click", function () {
    bodyEl.classList.toggle("dark");

    if (bodyEl.classList.contains("dark")) {
      changeBtn.textContent = "ON";
      bodyEl.style.backgroundImage = "url('/image/black.png')";
    } else {
      changeBtn.textContent = "OFF";
      bodyEl.style.backgroundImage = "url('/image/back.png')";
    }
  });

  const controlDivs = document.querySelectorAll(".control");

  controlDivs.forEach((controlDiv) => {
    const status = controlDiv.querySelector(".status");

    controlDiv.addEventListener("click", function () {
      if (status.textContent === "OFF") {
        status.textContent = "ON";
        controlDiv.style.backgroundColor = "#99ccff";
      } else {
        status.textContent = "OFF";
        controlDiv.style.backgroundColor = "#fefefe";
      }
    });

    controlDiv.addEventListener("mouseover", function () {
      controlDiv.style.backgroundColor = "#cccccc"; // Change to desired hover color
    });

    controlDiv.addEventListener("mouseout", function () {
      if (status.textContent === "OFF") {
        controlDiv.style.backgroundColor = "#fefefe";
      } else {
        controlDiv.style.backgroundColor = "#99ccff";
      }
    });
  });
});

/*document.addEventListener("DOMContentLoaded", function () {
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
  });*/

/* const controlDivs = document.querySelectorAll(".control");

  controlDivs.forEach((controlDiv) => {
    const status = controlDiv.querySelector(".status");

    controlDiv.addEventListener("click", function () {
      if (status.textContent === "OFF") {
        status.textContent = "ON";
        controlDiv.style.backgroundColor = "#99ccff";
      } else {
        status.textContent = "OFF";
        controlDiv.style.backgroundColor = "#fefefe";
      }
      
    });
  });
}); */
