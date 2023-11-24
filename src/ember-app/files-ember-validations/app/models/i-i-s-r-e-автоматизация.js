import {
  defineNamespace,
  defineProjections,
  Model as АвтоматизацияMixin
} from '../mixins/regenerated/models/i-i-s-r-e-автоматизация';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(АвтоматизацияMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
