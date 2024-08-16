import accessImmutableObject from "./2-nested";

const accImutable = accessImmutableObject(
  {
    name: {
      first: "Guillaume",
      last: "Salva",
    },
  },
  ["name", ""]
);

console.log(accImutable);
