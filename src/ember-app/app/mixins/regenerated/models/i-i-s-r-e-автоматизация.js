import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  покупка: DS.hasMany('i-i-s-r-e-покупка', { inverse: 'автоматизация', async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-r-e-автоматизация.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  покупка: {
    descriptionKey: 'models.i-i-s-r-e-автоматизация.validations.покупка.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АвтоматизацияE', 'i-i-s-r-e-автоматизация', {
    номер: attr('Номер', { index: 0 }),
    покупка: hasMany('i-i-s-r-e-покупка', 'Покупка', {
      сумма: attr('Сумма', { index: 0 }),
      количество: attr('Количество', { index: 1 })
    })
  });

  modelClass.defineProjection('АвтоматизацияL', 'i-i-s-r-e-автоматизация', {
    номер: attr('Номер', { index: 0 }),
    покупка: hasMany('i-i-s-r-e-покупка', 'Покупка', {
      сумма: attr('Сумма', { index: 0 }),
      количество: attr('Количество', { index: 1 })
    })
  });
};
