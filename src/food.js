const { incHunger, decHunger } = require("./hunger");
function food() {
  // DIFFERENT FOOD ITEMS AND THEIR EFFECTS ON HUNGER
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
function list() {
  return [
    { name: "Apple", hungerRestore: 15, effect: food().apple },
    { name: "Rice", hungerRestore: 2, effect: food().rice },
    { name: "Sus Stew", hungerRestore: 50, effect: food().susStew },
    {
      name: "Poisonous Potato",
      hungerRestore: -15,
      effect: food().poisonousPotato,
    },
  ];
}
module.exports = { food, list };
