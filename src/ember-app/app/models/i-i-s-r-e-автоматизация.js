import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as АвтоматизацияMixin
} from '../mixins/regenerated/models/i-i-s-r-e-автоматизация';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(АвтоматизацияMixin, Validations, {
});

defineProjections(Model);

export default Model;
