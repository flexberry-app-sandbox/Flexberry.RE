import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('decimal'),
  сумма: DS.attr('decimal'),
  базаКлиента: DS.belongsTo('i-i-s-r-e-база-клиента', { inverse: null, async: false }),
  остаток: DS.belongsTo('i-i-s-r-e-остаток', { inverse: null, async: false }),
  ценноваяСтела: DS.belongsTo('i-i-s-r-e-ценновая-стела', { inverse: null, async: false }),
  автоматизация: DS.belongsTo('i-i-s-r-e-автоматизация', { inverse: 'покупка', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-r-e-покупка.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-r-e-покупка.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  базаКлиента: {
    descriptionKey: 'models.i-i-s-r-e-покупка.validations.базаКлиента.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  остаток: {
    descriptionKey: 'models.i-i-s-r-e-покупка.validations.остаток.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  ценноваяСтела: {
    descriptionKey: 'models.i-i-s-r-e-покупка.validations.ценноваяСтела.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  автоматизация: {
    descriptionKey: 'models.i-i-s-r-e-покупка.validations.автоматизация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПокупкаE', 'i-i-s-r-e-покупка', {
    сумма: attr('Сумма', { index: 0 }),
    количество: attr('Количество', { index: 1 })
  });

  modelClass.defineProjection('ПокупкаL', 'i-i-s-r-e-покупка', {
    сумма: attr('Сумма', { index: 0 }),
    количество: attr('Количество', { index: 1 })
  });
};
