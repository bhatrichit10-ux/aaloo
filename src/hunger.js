const { get, set } = require("./stats");

function incHunger(x) {
  const stats = get();
  return set("hunger", stats.hunger + x).hunger;
}

function decHunger(x) {
  const stats = get();
  return set("hunger", stats.hunger - x).hunger;
}

module.exports = { incHunger, decHunger };
