import {
  defineNamespace,
  defineProjections,
  Model as ЦенноваяСтелаMixin
} from '../mixins/regenerated/models/i-i-s-r-e-ценновая-стела';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЦенноваяСтелаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
