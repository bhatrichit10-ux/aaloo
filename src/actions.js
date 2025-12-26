const { decEnergy } = require("./energy");
const { get, set } = require("./stats");

function actions() {
  return {
    run() {
      const stats = get();

      if (stats.activity === "sleeping") return "Sleeping.";
      if (stats.hunger >= 80) return "Too hungry.";
      if (stats.energy < 20) return "Too tired.";

      set("activity", "running");
      decEnergy(20);
      set("mood", stats.mood + 5);
      return "You ran fast!";
    },

    play() {
      const stats = get();

      if (stats.activity === "sleeping") return "Sleeping.";
      if (stats.hunger >= 80) return "Too hungry.";
      if (stats.energy < 10) return "Too tired.";

      set("activity", "playing");
      decEnergy(10);
      set("mood", stats.mood + 10);
      return "You played happily!";
    },

    sleep() {
      set("activity", "sleeping");
      return "The potato is sleeping.";
    },
  };
}

module.exports = { actions };
