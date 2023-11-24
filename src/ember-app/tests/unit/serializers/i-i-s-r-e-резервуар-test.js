import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-r-e-резервуар', 'Unit | Serializer | i-i-s-r-e-резервуар', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-r-e-резервуар',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-r-e-состояния',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
