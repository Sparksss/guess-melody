import AbstractView from "./../abstract-view";

class GenreView extends AbstractView {
  constructor(data, level) {
    super();
    this.data = data;
    this.level = level;
  }

  get tracks() {
    let listOfTracks = ``;
    for (let i = 0; i < this.data.levels[this.level].answers.length; i++) {
      listOfTracks += ` <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio src="${this.data.levels[this.level].answers[i].src}"></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-1" id="a-2">
          <label class="genre-answer-check" for="${this.data.levels[this.level].answers[i].title}"></label>
        </div>`;
    }
    return listOfTracks;
  }

  get template() {
    return `<section class="main main--level main--level-genre">
    <div class="main-wrap">
      <h2 class="title">${this.data.levels[this.level].title}</h2>
      <form class="genre">
        ${this.tracks}
        <button class="genre-answer-send" type="submit" disabled>Ответить</button>
      </form>
    </div>
  </section>`;
  }

  changeScreen() {
  }

  bind() {
    this.element.querySelector(`form.genre`).addEventListener(`click`, (evt) => {
      this.changeScreen(evt);
    });
  }
}


export default GenreView;