import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ResultRoute extends Route {
  @service('score') score;
  model() {
    let score = this.score.get('score');
    return { score };
  }
}
