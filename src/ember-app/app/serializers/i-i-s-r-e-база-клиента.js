import { Serializer as БазаКлиентаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-r-e-база-клиента';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(БазаКлиентаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
