function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Poem goes here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let formElement = document.querySelector("#input-form");
let poemElement = document.querySelector("#poem");
formElement.addEventListener("submit", generatePoem);
