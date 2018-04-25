const createElement = (str) => {
  const parser = document.createElement(`template`);
  parser.innerHTML = str;
  return parser.content;
};

const createSection = () => {
  const element = document.createElement(`section`);
  element.classList.add(`main`, `main--level`);
  return element;
};

const mainScreen = document.querySelector(`.main`);

const renderTemplate = (screenTemplate) => {
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(screenTemplate);
};

const checkAnswer = (currentAnswer, answers) => {
  let isCorrect;
  for (let i = 0; i < answers.length; i++) {
    if (currentAnswer === answers[i].title) {
      isCorrect = answers[i].isCorrect;
      break;
    }
  }
  return isCorrect;
};

export {createElement, renderTemplate, checkAnswer, createSection};
