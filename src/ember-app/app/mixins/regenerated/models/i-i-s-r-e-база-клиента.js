import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  idКлиента: DS.attr('number'),
  логин: DS.attr('string'),
  номерКарта: DS.attr('number'),
  пароль: DS.attr('string')
});

export let ValidationRules = {
  idКлиента: {
    descriptionKey: 'models.i-i-s-r-e-база-клиента.validations.idКлиента.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  логин: {
    descriptionKey: 'models.i-i-s-r-e-база-клиента.validations.логин.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерКарта: {
    descriptionKey: 'models.i-i-s-r-e-база-клиента.validations.номерКарта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  пароль: {
    descriptionKey: 'models.i-i-s-r-e-база-клиента.validations.пароль.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('БазаКлиентаE', 'i-i-s-r-e-база-клиента', {
    idКлиента: attr('Id клиента', { index: 0 }),
    логин: attr('Логин', { index: 1 }),
    пароль: attr('Пароль', { index: 2 }),
    номерКарта: attr('Номер карта', { index: 3 })
  });

  modelClass.defineProjection('БазаКлиентаL', 'i-i-s-r-e-база-клиента', {
    idКлиента: attr('Id клиента', { index: 0 }),
    логин: attr('Логин', { index: 1 }),
    пароль: attr('Пароль', { index: 2 }),
    номерКарта: attr('Номер карта', { index: 3 })
  });
};
