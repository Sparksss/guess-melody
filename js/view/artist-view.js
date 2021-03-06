import AbstractView from "./../abstract-view";

class ArtistView extends AbstractView {
  constructor(data, level) {
    super();
    this.data = data;
    this.level = level;
  }

  get artistsList() {
    let listArtists = ``;
    const answersData = this.data[this.level].answers;
    answersData.forEach((currentAnswer) => {
      listArtists += `<div class="main-answer-wrapper">
          <input class="main-answer-r" type ="radio" id="answer-1" name="answer" value="val-1"/>
          <label class="main-answer" for="answer-1">
            <img class="main-answer-preview" data-identity="${currentAnswer.title}" src="${currentAnswer.image.url}"
                 alt="${currentAnswer.title}" width="134" height="134">
            ${currentAnswer.title}
          </label>
        </div>`;
    });
    return listArtists;
  }

  get template() {
    return `<section class="main main--level main--level-artist">
    <div class="main-wrap">
      <h2 class="title main-title">${this.data[this.level].question}</h2>
      <div class="player-wrapper">
        <div class="player">
          <audio src="${this.data[this.level].src}" autoplay data-control="pause"></audio>
          <button class="player-control player-control--pause"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <form class="main-list">${this.artistsList}</form>
    </div>
  </section>`;
  }

  bind() {
    this.element.querySelector(`.player-control`).addEventListener(`click`, (evt) => {
      evt.preventDefault();
      evt.target.classList.toggle(`player-control--pause`);
      evt.target.classList.toggle(`player-control--play`);
      evt.target.previousElementSibling.dataset.control = this.controlMusic(evt.target.previousElementSibling, evt.target.previousElementSibling.dataset.control);
    });
    this.element.querySelector(`form.main-list`).addEventListener(`click`, (evt) => {
      if (evt.target.classList.contains(`main-answer-preview`)) {
        this.onAnswer(evt.target.dataset.identity, `Artist`);
      }
    });
  }

  onAnswer() {
  }

  controlMusic() {
  }
}

export default ArtistView;
