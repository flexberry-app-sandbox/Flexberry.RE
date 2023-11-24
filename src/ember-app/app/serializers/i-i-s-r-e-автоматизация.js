import { Serializer as АвтоматизацияSerializer } from
  '../mixins/regenerated/serializers/i-i-s-r-e-автоматизация';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(АвтоматизацияSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
