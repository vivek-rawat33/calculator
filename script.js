let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");
let toggle = document.querySelector(".mode");
let body = document.querySelector("body");
let currentMode = "dark";
let string = "";
let secret = () => {
  body.style.backgroundImage = "url('secret.jpg')";
  body.style.backgroundSize = "contain";
  body.style.backgroundPosition = "center";

};

let removeSecret = () => {
  body.style.backgroundImage = "";
};

let arr = Array.from(buttons);
arr.forEach((buttons) => {
  buttons.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.slice(0, -1);
      input.value = string;
    } else if (e.target.innerHTML == "Mode") {
      return;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }

    if (input.value === "0000") {
      secret();
    }
    else{
      removeSecret();
    }
  });
});

toggle.addEventListener("click", () => {
  if (currentMode == "dark") {
    currentMode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
  } else {
    currentMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
  }
});
