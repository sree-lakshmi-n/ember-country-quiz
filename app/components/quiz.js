import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class QuizComponent extends Component {
  @tracked qnCount = 0;
  @tracked demo = this.args.model;
}
