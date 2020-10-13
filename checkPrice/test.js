const checkPrice = require("./index");

let person = {};
test("checkPrice function exists", () => {
  expect(typeof checkPrice).toEqual("function");
});

test("checkPrice handles if a person is under 18", () => {
  person = {
    name: "Daniel",
    age: 17,
    gender: "male",
    healthCondition: "heart disease",
  };
  expect(checkPrice(person)).toEqual("not eligible");
});

test("checkPrice handles if an eligible person has no health conditions", () => {
  person = { name: "Zeke", age: 18, gender: "male" };
  expect(checkPrice(person)).toEqual(100);
});

test("checkPrice handles if an eligible person has heart disease", () => {
  person = {
    name: "Brad",
    age: 20,
    gender: "male",
    healthCondition: "heart disease",
  };
  expect(checkPrice(person)).toEqual(117);
});

test("checkPrice handles if an eligible person has sleep apnea", () => {
  person = {
    name: "Josh",
    age: 40,
    gender: "male",
    healthCondition: "sleep apnea",
  };
  expect(checkPrice(person)).toEqual(190.8);
});

test("checkPrice handles if an eligible person has allergies and is female", () => {
  person = {
    name: "Kelly",
    age: 50,
    gender: "female",
    healthCondition: "allergies",
  };
  expect(checkPrice(person)).toEqual(210.2);
});
