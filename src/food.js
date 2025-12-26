const { incHunger, decHunger } = require("./hunger");
function food() {
  function apple() {
    return decHunger(15);
  }
  function poisonousPotato() {
    return incHunger(15);
  }
  function rice() {
    return decHunger(2);
  }
  function susStew() {
    const lucky = Math.random() < 0.5;
    let newHunger;
    if (lucky) {
      newHunger = decHunger(50);
    } else {
      newHunger = incHunger(50);
    }
    return newHunger;
  }
  return { apple, rice, susStew, poisonousPotato };
}
module.exports = { food };
