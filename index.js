const { get } = require("./src/stats");
const { hungerTick } = require("./src/hungerTick");
const { applyTimeReward } = require("./src/timeReward");
const { actions } = require("./src/actions");
const { food, list } = require("./src/food");
const { ask }  = require("./cli/ask");
let ac = ['play', 'run', 'sleep', 'feed',  'wake', 'exit'];
async function main() {
  console.log("Welcome to the Aaloo Simulator!");
    while (true) {
        const stats = get();
        console.log(`\nMood: ${stats.mood} | Hunger: ${stats.hunger} | Energy: ${stats.energy} | Activity: ${stats.activity}`);
        const action = await ask("What do you want to do?", "list", ac);
        if (action === "exit") {
            console.log("Exiting the simulator. Goodbye!");
            break;
        } else if (action === "feed") {
            const foodList = list();
            const foodChoices = foodList.map(f => f.name);
            const chosenFoodName = await ask("What do you want to feed?", "list", foodChoices);
            const chosenFood = foodList.find(f => f.name === chosenFoodName);
            if (chosenFood) {
                const newHunger = chosenFood.effect();
                console.log(`You fed your potato ${chosenFood.name}. Hunger changed by ${chosenFood.hungerRestore}. New hunger: ${newHunger}`); 
            } else if(action === 'wake'){
                actions()['wake']();
                console.log("Your potato is now awake!");
            }
        } else {
            const result = actions()[action]();
            console.log(result);
        }
        hungerTick();
        applyTimeReward();
    }       
}
main();