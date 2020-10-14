const calculateTotalPrice = require("./index");

let person = {};
test("calculateTotalPrice function exists", () => {
  expect(typeof calculateTotalPrice).toEqual("function");
});

test("calculateTotalPrice handles if a person is under 18", () => {
  person = {
    name: "Daniel",
    age: 17,
    gender: "male",
    healthCondition: "heart disease",
  };
  expect(calculateTotalPrice({person})).toEqual("not eligible");
});

test("calculateTotalPrice handles if an eligible person has no health conditions", () => {
  person = { name: "Zeke", age: 18, gender: "male" };
  expect(calculateTotalPrice({person})).toEqual(100);
});

test("calculateTotalPrice handles if an eligible person has heart disease", () => {
  person = {
    name: "Brad",
    age: 20,
    gender: "male",
    healthCondition: "heart disease",
  };
  expect(calculateTotalPrice({person})).toEqual(117);
});

test("calculateTotalPrice handles if an eligible person has sleep apnea", () => {
  person = {
    name: "Josh",
    age: 40,
    gender: "male",
    healthCondition: "sleep apnea",
  };
  expect(calculateTotalPrice({person})).toEqual(190.8);
});

test("calculateTotalPrice handles if an eligible person has allergies and is female", () => {
  person = {
    name: "Kelly",
    age: 50,
    gender: "female",
    healthCondition: "allergies",
  };
  expect(calculateTotalPrice({person})).toEqual(210.2);
});
