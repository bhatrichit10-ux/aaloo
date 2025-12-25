const { get, set } = require('./stats')

function incHunger(x) {
let stats = get()
let newHunger = stats.hunger + x
set('hunger', newHunger)
return get().hunger
}
function decHunger(x) {
let stats = get()
let newHunger = stats.hunger - x
set('hunger', newHunger)
return get().hunger
}

module.exports = {
    incHunger,
    decHunger
}