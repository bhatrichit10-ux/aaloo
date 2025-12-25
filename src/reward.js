const { incEnergy } = require('./energy')

function rewardEffort(units) {
  const epu = 20

  const gain = units * epu
  return incEnergy(gain)
}

module.exports = {
  rewardEffort
}
