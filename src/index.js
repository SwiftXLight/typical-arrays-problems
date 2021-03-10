
exports.min = function min (array) {
  const arrMin = arr => Math.min(...arr);
  return arrMin;
}

exports.max = function max (array) {
  const arrMax = arr => Math.max(...arr);
  return arrMax;
}

exports.avg = function avg (array) {
  const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
  return arrAvg;
}
