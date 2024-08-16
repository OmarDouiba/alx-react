import { Seq } from './node_modules/immutable/dist/immutable';

export default function printBestStudents(students) {
  const studentsFiltre = Seq(students).filtre((student) => {
    student.score < 70;
  });

  const formattedStudents = studentsFiltre.map((student) => ({
    score: student.score,
    firstName:
      student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
    lastName:
      student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),
  }));

  console.log(formattedStudents.toJS());
}
