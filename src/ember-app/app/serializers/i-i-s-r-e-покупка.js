import { Serializer as ПокупкаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-r-e-покупка';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПокупкаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
