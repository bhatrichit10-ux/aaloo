const { get } = require("./src/stats");
const { hungerTick } = require("./src/hungerTick");
const { applyTimeReward } = require("./src/timeReward");
const { actions } = require("./src/actions");
const { food } = require("./src/food");

applyTimeReward();
hungerTick();

console.log("Current Stats:", get());

const act = actions();
const eat = food();

console.log(act.sleep());
console.log(eat.apple());
console.log(act.play());

console.log("Updated Stats:", get());
