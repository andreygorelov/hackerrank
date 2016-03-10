// Get all the buttons
var res = document.getElementById("res");
var btn0 = document.getElementById("btn0");
var btn1 = document.getElementById("btn1");
var btnClr = document.getElementById("btnClr");
var btnEql = document.getElementById("btnEql");
var btnSum = document.getElementById("btnSum");
var btnSub = document.getElementById("btnSub");
var btnDiv = document.getElementById("btnDiv");
var btnMul = document.getElementById("btnMul");
// Add numbers and operators to display
function addRes(val) {
  var tempRes = res.innerHTML;
  res.innerHTML = tempRes + "" + val;
}
btn0.onclick = function() {
  addRes(btn0.innerHTML);
}
btn1.onclick = function() {
  addRes(btn1.innerHTML);
}
btnSum.onclick = function() {
  addRes(btnSum.innerHTML);
}
btnSub.onclick = function() {
  addRes(btnSub.innerHTML);
}
btnMul.onclick = function() {
  addRes(btnMul.innerHTML);
}
btnDiv.onclick = function() {
  addRes(btnDiv.innerHTML);
}
// General calculator method takes two params and a function.
// Round down if it has decimals 
var calc = function(x, y, fn) {
  return Math.floor((fn(parseInt(x, 2), parseInt(y, 2))).toString(2));
}
// Actual calculation functions
var sum = function(x, y) {
  return x + y;
}
var sub = function(x, y) {
  return x - y;
}
var mul = function(x, y) {
  return x * y;
}
var div = function(x, y) {
  return x / y;
}
// Equal is pressed.
// Separate first number, operator (fn) and second number
btnEql.onclick = function() {
  var tempResArr = res.innerHTML.split('');
  var x = '';
  var y = '';
  var fn = '';
  for (var i = 0; i < tempResArr.length; i++) {
    if (isNaN(tempResArr[i])) {
      if (tempResArr[i] == '+') {
        fn = sum;
      } else if (tempResArr[i] === '*') {
        fn = mul;
      } else if (tempResArr[i] === '-') {
        fn = sub;
      } else if (tempResArr[i] === '/') {
        fn = div;
      }
    } else {
      if (fn === '') {
        x += "" + tempResArr[i];
      } else {
        y += "" + tempResArr[i];
      }
    }
  }
  res.innerHTML = calc(x, y, fn);
}
// Clear the display
btnClr.onclick = function() {
  res.innerHTML = '';
}
