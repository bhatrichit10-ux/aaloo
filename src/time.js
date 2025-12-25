function now() {
  return Date.now()
}

function diff(a, b) {
  return Math.abs(b - a)
}

module.exports = {
  now,
  diff
}
