import {initializationState} from "./../models/initialization-state";

class GameModel {
  constructor() {
    this.state = initializationState();
  }

  get currentState() {
    return this.state;
  }

  nextLevel() {
    ++this.state.level;
  }

  get currentLevel() {
    return this.state.level;
  }

  isCorrectAnswers(answers) {
    const isCorrectAnswer = answers.every((answer) => {
      return answer === true;
    });
    return isCorrectAnswer;
  }

  get currentNotes() {
    return this.state.notes;
  }

  lossOfNote() {
    --this.state.notes;
  }

  isTheGameOver() {
    return this.state.notes - 1 > 0;
  }

  get countAnswers() {
    return this.state.countAnswers;
  }

  addGenreAnswer(answer) {
    this.state.countAnswers.push(answer);
  }

  checkAnswer(currentAnswer, checkElem, answers) {
    let isCorrect = false;
    for (const answer of answers) {
      if (answer[checkElem] === currentAnswer) {
        isCorrect = answer.isCorrect;
        break;
      }
    }
    return isCorrect;
  }

  addAnswer(isCorrect) {
    this.state.answers.push(isCorrect);
  }

}


export default GameModel;

