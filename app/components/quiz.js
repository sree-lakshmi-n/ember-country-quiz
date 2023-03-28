import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class QuizComponent extends Component {
  constructor() {
    super(...arguments);
    console.log(this.args.model);
  }

  @tracked qnCount = 0;
  @tracked demo = this.args.model;
}
