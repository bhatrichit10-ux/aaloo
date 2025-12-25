const { get } = require("./stats")
const { incHunger } = require("./hunger")

function hungerTick() {
  const stats = get()

  if (stats.activity === "sleeping") {
    return "Sleeping. Hunger unchanged."
  }

  incHunger(5)
  return "Potato got a bit hungrier."
}

module.exports = { hungerTick }
