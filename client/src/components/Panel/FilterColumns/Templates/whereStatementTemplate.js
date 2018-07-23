// for each selected column
const where = [
  {
    name: "Greater Than",
    type: ":>",
    description: "Search for values greater than the input value."
  },
  {
    name: "Less Than",
    type: ":<",
    description: "Search for values less than the input value."
  },
  {
    name: "Starts With",
    type: ":^",
    description: "Search for values that start with the input word."
  },
  {
    name: "Ends With",
    type: ":$",
    description: "Search for values that end with the input word."
  },
  {
    name: "Num Not",
    type: ":!",
    description: "Search for values that are not equal to input number."
  },
  {
    name: "Text Not",
    type: ":str!",
    description: "Search for values that are not equal to input text."
  }
];

export default where;
