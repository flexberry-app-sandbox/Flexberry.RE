import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-r-e-автоматизация', 'Unit | Model | i-i-s-r-e-автоматизация', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-r-e-автоматизация',
    'model:i-i-s-r-e-база-клиента',
    'model:i-i-s-r-e-остаток',
    'model:i-i-s-r-e-покупка',
    'model:i-i-s-r-e-резервуар',
    'model:i-i-s-r-e-ценновая-стела',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
