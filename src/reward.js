const { incEnergy } = require('./energy')

function rewardEffort(units) {
  const epu = 10

  const gain = units * epu
  return incEnergy(gain)
}

module.exports = {
  rewardEffort
}
