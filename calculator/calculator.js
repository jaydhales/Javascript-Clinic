const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
const input = 0;

buttons.forEach(
  (btn) =>
    (btn.onclick = (e) => {
      btn.classList.contains("fn")
        ? console.log(btn)
        : (input += btn.innerText);
    })
);
