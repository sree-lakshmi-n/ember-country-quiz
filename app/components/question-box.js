import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class QuestionBoxComponent extends Component {
  @tracked qnCount = 0;
  @tracked demo = this.args.model[this.qnCount];
  @tracked correctOption = this.demo.answer;

  @action
  increment() {
    if (this.qnCount < this.args.model.length - 1) {
      this.qnCount = this.qnCount + 1;
      this.demo = this.args.model[this.qnCount];
      this.correctOption = this.demo.answer;
    }
  }
  get isLastQn() {
    return this.qnCount == this.args.model.length - 1;
  }

  @action handleClick(event) {
    if (event) {
      let optionsBox = event.target.closest('.options-box');
      let childElements = event.target.querySelectorAll('.option-value');
      const options = optionsBox.querySelectorAll('.option-value');
      Array.from(options).forEach((option) => {
        if (option.textContent.trim() === this.correctOption) {
          option.parentNode.classList.add('correct');
        }
      });
    }
  }
}
