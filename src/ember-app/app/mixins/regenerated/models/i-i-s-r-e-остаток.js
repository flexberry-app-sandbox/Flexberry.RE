import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  колво: DS.attr('decimal'),
  номер: DS.attr('number')
});

export let ValidationRules = {
  колво: {
    descriptionKey: 'models.i-i-s-r-e-остаток.validations.колво.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-r-e-остаток.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОстатокE', 'i-i-s-r-e-остаток', {
    номер: attr('Номер', { index: 0 }),
    колво: attr('Колво', { index: 1 })
  });

  modelClass.defineProjection('ОстатокL', 'i-i-s-r-e-остаток', {
    номер: attr('Номер', { index: 0 }),
    колво: attr('Колво', { index: 1 })
  });
};
