import { Serializer as РезервуарSerializer } from
  '../mixins/regenerated/serializers/i-i-s-r-e-резервуар';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РезервуарSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
