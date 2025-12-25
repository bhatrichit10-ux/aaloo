const { get, set } = require("./stats")
const { incEnergy } = require("./energy")
const { now } = require("./time")

const ONE_HOUR_MS = 60 * 60 * 1000
const ENERGY_PER_HOUR = 40
const HUNGER_PER_HOUR = 10

function applyTimeReward() {
  const stats = get()
  const currentTime = now()

  if (stats.lastRewardCheck === 0) {
    set("lastRewardCheck", currentTime)
    return stats
  }

  const timePassed = currentTime - stats.lastRewardCheck
  const hoursPassed = Math.floor(timePassed / ONE_HOUR_MS)

  if (hoursPassed <= 0) return stats

  if (stats.activity === "sleeping") {
    let recovery = hoursPassed * ENERGY_PER_HOUR
    if (stats.hunger >= 60) recovery = Math.floor(recovery / 2)
    incEnergy(recovery)
  } else {
    set("hunger", stats.hunger + hoursPassed * HUNGER_PER_HOUR)
  }

  set("lastRewardCheck", stats.lastRewardCheck + hoursPassed * ONE_HOUR_MS)

  const updated = get()
  if (updated.activity === "sleeping" && updated.energy >= 100) {
    set("activity", "idle")
  }

  return get()
}

module.exports = { applyTimeReward }
