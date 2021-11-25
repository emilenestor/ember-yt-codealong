import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | shopping', function(hooks) {
  setupApplicationTest(hooks);

  test('It should be possible to add an item into the shopping cart', async function(assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');

    await click('[data-test-product="1"]');

    assert.strictEqual(currentURL(), '/item/1');

    await click('[data-test-add-to-cart]');

    assert.dom('[data-test-cart-count]').hasText('1');

    // await this.pauseTest();
  });
});
