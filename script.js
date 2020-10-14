import calculateTotalPrice from "./index";

const form = document.getElementById("policycalculator");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = event.target.elements.name.value;
  const age = Number(event.target.elements.age.value);
  const gender = event.target.elements.gender.value;
  const healthCondition = event.target.elements.userhealth.value;

  const person = { name, age, gender, healthCondition };

  alert(`Your final quote is ${calculateTotalPrice({ person })}`);
});
