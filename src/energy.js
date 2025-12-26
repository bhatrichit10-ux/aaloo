const { get, set } = require("./stats");
// just a alias to modify energy stat
function incEnergy(x) {
  let stats = get();
  let newEnergy = stats.energy + x;
  set("energy", newEnergy);
  return get().energy;
}
function decEnergy(x) {
  let stats = get();
  let newEnergy = stats.energy - x;
  set("energy", newEnergy);
  return get().energy;
}

module.exports = {
  incEnergy,
  decEnergy,
};
