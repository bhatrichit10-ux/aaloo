const { decEnergy } = require("./energy");
const { get, set } = require("./stats");
// Actions that can be performed on the potato - play, run, sleep, wake
function actions() {
  return {
    run() {
      const stats = get();
      if (stats.activity === "sleeping") return "Potato is sleeping. Wake it up first."; // These strings were changed to be more descriptive 
      if (stats.hunger >= 80) return "Potato is too hungry to run."; // I used chatgpt for that. I hope it's okay.
      if (stats.energy < 20) return "Potato is too tired to run.";
      set("activity", "running");
      decEnergy(20);
      set("mood", stats.mood + 5);
      return "You ran fast!";
    },

    play() {
      const stats = get();

      if (stats.activity === "sleeping") return "Potato is sleeping. Wake it up first.";
      if (stats.hunger >= 80) return "Potato is too hungry to play.";
      if (stats.energy < 10) return "Potato is too tired to play.";

      set("activity", "playing");
      decEnergy(10);
      set("mood", stats.mood + 10);
      return "Potato is having fun! It played around happily.";
    },

    sleep() {
      set("activity", "sleeping");
      return "The potato is now sleeping.\n Dont Disturb Him \n Zzz...";
    },
    wake() {
      set("activity", "idle");
      return "The potato woke up. He is a bit sleepy but now he is ready for action!";
    }
  };
}

module.exports = { actions };
