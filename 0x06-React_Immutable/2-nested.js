import { Map } from './node_modules/immutable/dist/immutable';

export default function accessImmutableObject(object, array) {
  if (array[0] in object) {
    if (array[1] in object[array[0]]) {
      return object[array[0]][array[1]];
    } else {
      return Map(object);
    }
  } else {
    return undefined;
  }
}
