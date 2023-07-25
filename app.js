let today = new Date();
let year = today.getFullYear();

const CURENT_EAR = year;
const CORECT_ANSWEAR = `Ответ правельный: сегодня <br> ${year} год.<br> ${today} `;
const ERROR_ANSWEAR = `Ответ неправельный: <br> ${year} год.<br> ${today}`;

const inputNode = document.querySelector(".js-input");
const buttonNode = document.querySelector(".js-button");
const outputNode = document.querySelector(".js-output");

buttonNode.addEventListener("click", function () {
  const answer = Number(inputNode.value);
  let output = CORECT_ANSWEAR;

  if (answer !== CURENT_EAR) {
    output = ERROR_ANSWEAR;
  }
  outputNode.innerHTML = output;
});
