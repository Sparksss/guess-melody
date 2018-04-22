import WelcomeView from "./../view/welcome-view";
import {startGame} from "./../models/startGame";
import {renderTemplate} from "./../utils";
import {initializationState} from "./../models/initialization-state";
import changeView from "./../change-state";

const renderWelcome = () => {
  const previewView = new WelcomeView(startGame);
  const state = initializationState();

  renderTemplate(previewView.element);
  previewView.playGame = () => {
    changeView(state);
  };

};

export default renderWelcome;
