// TICKLE Price Checker

// constants
const HEALTH_CONDITIONS = {
  "sleep apnea": 0.06,
  allergies: 0.01,
  "heart disease": 0.17,
};
const FEMALE_DISCOUNT = 12;
const BASE_COST = 100;

function calculateAgeBracketCost(age, cost) {
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

function calculateHealthConditionCost(condition, cost) {
  let increment = HEALTH_CONDITIONS[condition] * cost;
  return (cost += increment);
}

const calculateTotalPrice = (person) => {
  let cost = BASE_COST;

  // under 18 not eligible
  if (person.age < 18) return "not eligible";

  // finds the base cost for their age bracket
  cost = calculateAgeBracketCost(person.age, cost);

  // evaluates cost of health conditions
  if (person.healthCondition) {
    cost = calculateHealthConditionCost(person.healthCondition, cost);
  }

  // women receive $12 discount on final price
  if (person.gender === "female") {
    cost -= FEMALE_DISCOUNT;
  }

  return cost;
};

module.exports = calculateTotalPrice;
