// TICKLE Price Checker

// constants
const healthConditions = {
  "sleep apnea": 0.06,
  allergies: 0.01,
  "heart disease": 0.17,
};

let femaleDiscount = 12;

function findAgeBracketCost(age, cost) {
  let ageBracket = 0;
  let minAge = 18;
  let increment = 5;

  while (minAge + increment < age) {
    minAge += increment;
    ageBracket++;
  }

  ageBracket *= 20;
  return (cost += ageBracket);
}

function evaluateHealthConditions(condition, cost) {
  let increment = healthConditions[condition] * cost;
  return (cost += increment);
}

const checkPrice = (person) => {
  let cost = 100;

  // under 18 not eligible
  if (person.age < 18) return "not eligible";

  // find the base cost for their age bracket
  cost = findAgeBracketCost(person.age, cost);

  // evaluate cost of health conditions
  if (person.healthCondition) {
    cost = evaluateHealthConditions(person.healthCondition, cost);
  }

  // women receive $12 discount on final price
  return person.gender === "female" ? cost - femaleDiscount : cost;
};

module.exports = checkPrice;
