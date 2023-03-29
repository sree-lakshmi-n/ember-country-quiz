import Service from '@ember/service';

export default class ScoreService extends Service {
  score = 0;
  addScore() {
    this.score += 1;
  }
}
