import {
  defineNamespace,
  defineProjections,
  Model as ОстатокMixin
} from '../mixins/regenerated/models/i-i-s-r-e-остаток';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОстатокMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
