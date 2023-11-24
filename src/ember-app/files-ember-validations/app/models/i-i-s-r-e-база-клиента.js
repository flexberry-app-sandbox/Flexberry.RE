import {
  defineNamespace,
  defineProjections,
  Model as БазаКлиентаMixin
} from '../mixins/regenerated/models/i-i-s-r-e-база-клиента';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(БазаКлиентаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
