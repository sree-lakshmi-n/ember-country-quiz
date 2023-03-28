import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class QuestionBoxComponent extends Component {
  constructor() {
    super(...arguments);
    console.log(this.args.model);
  }
  @tracked qnCount = 0;
  @tracked demo = this.args.model[this.qnCount];

  @action
  increment() {
    if (this.qnCount < this.args.model.length - 1) {
      this.qnCount = this.qnCount + 1;
      this.demo = this.args.model[this.qnCount];
    }
  }
  get isLastQn() {
    return this.qnCount == this.args.model.length - 1;
  }
}
