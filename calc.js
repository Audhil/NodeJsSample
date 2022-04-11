function add(a, b) {
  return a+b
}

function sub(a, b) {
  return a-b
}

//  1st way of exporting
// module.exports.add = add
// module.exports.sub = sub

// 2nd way of exporting
exports.add = add
exports.sub = sub

//  3rd way of exporting
exports.addd = function addd(a, b) {
  return a + b
}

exports.subb = function subb(a, b) {
  return a - b
}
