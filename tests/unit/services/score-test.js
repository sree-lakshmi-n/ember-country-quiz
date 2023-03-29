import { module, test } from 'qunit';
import { setupTest } from 'country-quiz/tests/helpers';

module('Unit | Service | score', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:score');
    assert.ok(service);
  });
});
