module.exports = function reverse (n) {
  let stringN = n.toString();
  console.log(stringN);
  let result = '';
  for (let i = stringN.length - 1; i !== -1; i--) {
    if (stringN[i] === '-') {
        result = result;
    } else {
    result += stringN[i];
    }
  }
  return parseInt(result);
}
