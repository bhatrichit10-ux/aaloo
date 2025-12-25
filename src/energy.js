const { get, set } = require('./stats')

function incEnergy(x) {
let stats = get()
let newEnergy = stats.energy + x
set('energy', newEnergy)
return get().energy
}
function decEnergy(x) {
let stats = get()
let newEnergy = stats.energy - x
set('energy', newEnergy)
return get().energy
}

module.exports = {
    incEnergy,
    decEnergy
}