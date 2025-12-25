const path = require("node:path")
const fs = require("node:fs")

const DATA_DIR = path.join(__dirname, "..", "data")
const statsD = path.join(DATA_DIR, "stats.json")

function get() {
  const raw = fs.readFileSync(statsD, "utf-8")
  return JSON.parse(raw)
}

function set(key, value) {
  if (key !== "lastRewardCheck") {
    if (value < 0) value = 0
    if (value > 100) value = 100
  }

  const stats = get()
  stats[key] = value

  fs.writeFileSync(statsD, JSON.stringify(stats, null, 2))
  return stats
}

module.exports = {
  get,
  set
}
