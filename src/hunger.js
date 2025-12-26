const { get, set } = require("./stats");
// just a alias to modify hunger stat
function incHunger(x) {
  const stats = get();
  return set("hunger", stats.hunger + x).hunger;
}

function decHunger(x) {
  const stats = get();
  return set("hunger", stats.hunger - x).hunger;
}

module.exports = { incHunger, decHunger };
