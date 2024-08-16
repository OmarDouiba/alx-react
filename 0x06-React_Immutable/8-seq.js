import { Seq } from './node_modules/immutable/dist/immutable';

export function printBestStudents(obj) {
  const objLazySeq = Seq(obj).filtre((ele) => {
    ele.score < 70;
  });

  console.log(objLazySeq);
}
