function generatePoem(event) {
  event.preventDefault();

  let userInput = document.querySelector(".text-box").value;
  if (!userInput) return;

  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "⏳Generating poem...";

  let apiKey = "f063aad8tb9d2a804775off7e6bf14bb";
  let prompt = `Generate a short Zulu poem using the word "${userInput}".`;
  let context =
    "You are a creative ai who know how to rhyme with words, please generate a Zulu poem for every word submitted using the input form. Your poem MUST be 4 lines. Generate a new 4 line poem for every word submitted. Separate each line with a <br/>, your lines must not have commas.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios
    .get(apiURL)
    .then(returnPoem)
    .catch(function (error) {
      poemElement.innerHTML = "Oops! Something went wrong.";
      console.error(error);
    });
}

function returnPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let formElement = document.querySelector("#input-form");
formElement.addEventListener("submit", generatePoem);
