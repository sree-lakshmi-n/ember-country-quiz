import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class OptionComponent extends Component {
  @tracked answer = this.args.answer;
  @tracked correctAnswer = false;
  @tracked clicked = false;
  @service('score') score;

  @action isCorrect(value) {
    this.correctAnswer = value === this.answer;
    if (this.correctAnswer) {
      this.score.addScore();
    }
    this.clicked = true;
    this.args.handleClick();
  }
}
