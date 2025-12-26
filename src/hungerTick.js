const { get } = require("./stats");
const { incHunger } = require("./hunger");

function hungerTick() {
  const stats = get();

  if (stats.activity === "sleeping") {
    return "Sleeping. Hunger not gonna increase";
  }

  incHunger(5);
  return "Potato is hungry!";
}

module.exports = { hungerTick };
