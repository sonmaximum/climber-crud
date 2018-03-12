
function compare (a, b) {
  const idA = a.id
  const idB = b.id

  let comparison = 0
  if (idA > idB) {
    comparison = 1
  } else if (idA < idB) {
    comparison = -1
  }
  return comparison
}

module.exports = compare
