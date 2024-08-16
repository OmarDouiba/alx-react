import { fromJS } from './node_modules/immutable/dist/immutable';

export default function accessImmutableObject(object, array) {
  const immutableObject = fromJS(object);

  return immutableObject.getIn(array);
}
