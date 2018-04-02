import renderScreen from "./templates/renderScreenModule";
import createElement from './createElem';
import welcome from "./templates/welcomeModule";
import artist from "./templates/artistModule";
import genre from "./templates/genreModule";
import success from "./templates/resultSuccessModule";
import timeOut from "./templates/timeOutModule";
import attemptsEnded from "./templates/attemptsEndedModule";

const getRandomResult = () => {
  return parseInt(Math.random() * (3 - 1) + 1, 10);
};

const resultScreens = [
  success,
  timeOut,
  attemptsEnded
];

renderScreen(createElement(welcome));

document.addEventListener(`click`, (evt) => {
  let currentScreen;
  if (evt.target.classList.contains(`main-play`)) {
    currentScreen = artist;
  } else if (evt.target.classList.contains(`main-answer`)) {
    currentScreen = genre;
  } else if (evt.target.classList.contains(`player-control--play`)) {
    evt.preventDefault();
    document.querySelector(`.genre-answer-send`).disabled = false;
  } else if (evt.target.classList.contains(`genre-answer-send`)) {
    evt.preventDefault();
    currentScreen = resultScreens[getRandomResult()];
  } else if (evt.target.classList.contains(`main-replay`)) {
    evt.preventDefault();
    currentScreen = welcome;
  }
  if (currentScreen) {
    renderScreen(createElement(currentScreen));
  }
});
