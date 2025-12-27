const path = require("node:path");
const fs = require("node:fs");
const os = require("node:os");

const DATA_DIR = path.join(os.homedir(), "richpass");
const statsD = path.join(DATA_DIR, "stats.json");

const DEFAULT_STATS = {
  name: "aaloo",
  hunger: 0,
  energy: 100,
  mood: 100,
  activity: "idle",
  lastRewardCheck: 0,
};

function ensureData() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(statsD)) {
    fs.writeFileSync(statsD, JSON.stringify(DEFAULT_STATS, null, 2));
  }
}

function get() {
  ensureData();
  const raw = fs.readFileSync(statsD, "utf-8");
  return JSON.parse(raw);
}

function set(key, value) {
  ensureData();

  if (key !== "lastRewardCheck") {
    if (value < 0) value = 0;
    if (value > 100) value = 100;
  }

  const stats = get();
  stats[key] = value;

  fs.writeFileSync(statsD, JSON.stringify(stats, null, 2));

  return stats;
}

module.exports = {
  get,
  set,
};
