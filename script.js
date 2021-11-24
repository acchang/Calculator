const operate = (a, operator, b) => {

const add = (a,b) => {
  return a + b;
};

const subtract = (a,b) => {
  return a - b;
};

const multiply = (a,b) => {
  return a * b;
};

const divide = (a,b) => {
  return a / b;
}

  if (operator === "+") {return add(a,b)}
  else if (operator === "-") {return subtract(a,b)}
  else if (operator === "*") {return multiply(a,b)}
  else if (operator === "/") {return divide(a,b)}
};

function tooMuch(number) {
  number = number.toString();
  if (number.length > length)
   {alert("This calculator only goes to 9 places")
    number = parseFloat(number)
    console.log(number)
    number = number.toPrecision(8)
    number = number.toString()
  return number
  }
  else return number 
}
;


const zero = "0"
const one = "1"
const two = "2"
const three = "3"
const four = "4"
const five = "5"
const six = "6"
const seven = "7"
const eight = "8"
const nine = "9"

let a = zero
let b
let operator
let displayValue = "0"
let length = 9

const snark = "Dividing by zero yields infinity"
const lengthWarning ="limited to " + length + " places"


const cButton = document.querySelector("#CButton");
cButton.addEventListener("click", cFunc);
function cFunc() {
  displayValue = "0"
  a = zero
  b = ""
  operator = undefined
  document.querySelector("#screen").innerHTML = "0"
  document.querySelector("#operatorWindow").innerHTML = ""
    };

const posnegButton = document.querySelector("#posnegButton");
posnegButton.addEventListener("click", posnegFunc);
function posnegFunc() {
  displayValue = displayValue * -1
  document.querySelector("#screen").innerHTML = displayValue}

const percentButton = document.querySelector("#percentButton");
percentButton.addEventListener("click", percentFunc);
function percentFunc() {
   a = displayValue
   displayValue = operate(a, "*", 0.01)
   displayValue = tooMuch(displayValue)
   document.querySelector("#screen").innerHTML = displayValue
   document.querySelector("#operatorWindow").innerHTML = "%"
   }

const divideButton = document.querySelector("#divideButton");
divideButton.addEventListener("click", divideFunc);
function divideFunc() {
  if (operator == "/" && displayValue == "0") {alert(snark)}
  else if (operator === undefined || operator === "=")
    {a = parseFloat(displayValue)
    operator = "/"
    displayValue = ""
    }
  else if (operator !== undefined && displayValue == "") {
    operator = "/"
    }
  else if (operator !== undefined) {
    b = parseFloat(displayValue)
    a = parseFloat(a)
    a = operate(a, operator, b)
    a = tooMuch(a)
    document.querySelector("#screen").innerHTML = a
    displayValue =""
    operator = "/"
    }
    document.querySelector("#operatorWindow").innerHTML = operator
  }

const sevenButton = document.querySelector("#sevenButton");
sevenButton.addEventListener("click", sevenFunc);
function sevenFunc() {  
  if (operator === "=")
    {
    document.querySelector("#operatorWindow").innerHTML = ""
    operator = undefined
    document.querySelector("#screen").innerHTML = 7
    displayValue = seven
    }
  else if (displayValue == "0") 
    {
    document.querySelector("#screen").innerHTML = 7
    displayValue = seven
    }
  else {
    document.querySelector("#screen").innerHTML = displayValue + 7
    displayValue = displayValue.concat(seven)
    }
  if (displayValue.length > length) {
    alert(lengthWarning)
    displayValue = displayValue.substring(0,length)}
  }

const eightButton = document.querySelector("#eightButton");
eightButton.addEventListener("click", eightFunc);
function eightFunc() {  
  if (operator === "=")
    {
    document.querySelector("#operatorWindow").innerHTML = ""
    operator = undefined
    document.querySelector("#screen").innerHTML = 8
    displayValue = eight
    }
  else if (displayValue == "0") 
    {
    document.querySelector("#screen").innerHTML = 8
    displayValue = eight
    }
  else {
    document.querySelector("#screen").innerHTML = displayValue + 8
    displayValue = displayValue.concat(eight)
    }
  if (displayValue.length > length) {
    alert(lengthWarning)
    displayValue = displayValue.substring(0,length)}
  }

const nineButton = document.querySelector("#nineButton");
nineButton.addEventListener("click", nineFunc);
function nineFunc() {  
  if (operator === "=")
    {
    document.querySelector("#operatorWindow").innerHTML = ""
    operator = undefined
    document.querySelector("#screen").innerHTML = 9
    displayValue = nine
    }
  else if (displayValue == "0") 
    {
    document.querySelector("#screen").innerHTML = 9
    displayValue = nine
    }
  else {
    document.querySelector("#screen").innerHTML = displayValue + 9
    displayValue = displayValue.concat(nine)
    }
  if (displayValue.length > length) {
    alert(lengthWarning)
    displayValue = displayValue.substring(0,length)}
  }


const xButton = document.querySelector("#xButton");
xButton.addEventListener("click", xFunc);
function xFunc() {
  if (operator == "/" && displayValue == "0") {alert(snark)}
  else if (operator === undefined || operator === "=")
    {a = parseFloat(displayValue)
    operator = "*"
    displayValue = ""
    }
  else if (operator !== undefined && displayValue == "") {
    operator = "*"
    }
  else if (operator !== undefined) {
    b = parseFloat(displayValue)
    a = parseFloat(a)
    a = operate(a, operator, b)
    a = tooMuch(a)
    document.querySelector("#screen").innerHTML = a
    displayValue =""
    operator = "*"
    }
    document.querySelector("#operatorWindow").innerHTML = "x"
  }

const fourButton = document.querySelector("#fourButton");
fourButton.addEventListener("click", fourFunc);
function fourFunc() {  
  if (operator === "=")
    {
    document.querySelector("#operatorWindow").innerHTML = ""
    operator = undefined
    document.querySelector("#screen").innerHTML = 4
    displayValue = four
    }
  else if (displayValue == "0") 
    {
    document.querySelector("#screen").innerHTML = 4
    displayValue = four
    }
  else {
    document.querySelector("#screen").innerHTML = displayValue + 4
    displayValue = displayValue.concat(four)
    }
  if (displayValue.length > length) {
    alert(lengthWarning)
    displayValue = displayValue.substring(0,length)}
  }

const fiveButton = document.querySelector("#fiveButton");
fiveButton.addEventListener("click", fiveFunc);
function fiveFunc() {  
  if (operator === "=")
    {
    document.querySelector("#operatorWindow").innerHTML = ""
    operator = undefined
    document.querySelector("#screen").innerHTML = 5
    displayValue = five
    }
  else if (displayValue == "0") 
    {
    document.querySelector("#screen").innerHTML = 5
    displayValue = five
    }
  else {
    document.querySelector("#screen").innerHTML = displayValue + 5
    displayValue = displayValue.concat(five)
    }
  if (displayValue.length > length) {
    alert(lengthWarning)
    displayValue = displayValue.substring(0,length)}
  }


const sixButton = document.querySelector("#sixButton");
sixButton.addEventListener("click", sixFunc);
function sixFunc() {  
  if (operator === "=")
    {
    document.querySelector("#operatorWindow").innerHTML = ""
    operator = undefined
    document.querySelector("#screen").innerHTML = 6
    displayValue = six
    }
  else if (displayValue == "0") 
    {
    document.querySelector("#screen").innerHTML = 6
    displayValue = six
    }
  else {
    document.querySelector("#screen").innerHTML = displayValue + 6
    displayValue = displayValue.concat(six)
    }
  if (displayValue.length > length) {
    alert(lengthWarning)
    displayValue = displayValue.substring(0,length)}
  }
      


const subtractButton = document.querySelector("#subtractButton");
subtractButton.addEventListener("click", subtractFunc);
function subtractFunc() {
  if (operator == "/" && displayValue == "0") {alert(snark)}
  else if (operator === undefined || operator === "=")
    {a = parseFloat(displayValue)
    operator = "-"
    displayValue = ""
    }
  else if (operator !== undefined && displayValue == "") {
    operator = "-"
    }
  else if (operator !== undefined) {
    b = parseFloat(displayValue)
    a = parseFloat(a)
    a = operate(a, operator, b)
    a = tooMuch(a)
    document.querySelector("#screen").innerHTML = a
    displayValue =""
    operator = "-"
    }
    document.querySelector("#operatorWindow").innerHTML = operator
  }


const oneButton = document.querySelector("#oneButton");
oneButton.addEventListener("click", oneFunc);
function oneFunc() {  
  if (operator === "=")
    {
    document.querySelector("#operatorWindow").innerHTML = ""
    operator = undefined
    document.querySelector("#screen").innerHTML = 1
    displayValue = one
    }
  else if (displayValue == "0") 
    {
    document.querySelector("#screen").innerHTML = 1
    displayValue = one
    }
  else {
    document.querySelector("#screen").innerHTML = displayValue + 1
    displayValue = displayValue.concat(one)
    }
  if (displayValue.length > length) {
    alert(lengthWarning)
    displayValue = displayValue.substring(0,length)}
  }


  const twoButton = document.querySelector("#twoButton");
  twoButton.addEventListener("click", twoFunc);
  function twoFunc() {  
    if (operator === "=")
      {
      document.querySelector("#operatorWindow").innerHTML = ""
      operator = undefined
      document.querySelector("#screen").innerHTML = 2
      displayValue = two
      }
    else if (displayValue == "0") 
      {
      document.querySelector("#screen").innerHTML = 2
      displayValue = two
      }
    else {
      document.querySelector("#screen").innerHTML = displayValue + 2
      displayValue = displayValue.concat(two)
      }
    if (displayValue.length > length) {
      alert(lengthWarning)
      displayValue = displayValue.substring(0,length)}
    }


const threeButton = document.querySelector("#threeButton");
threeButton.addEventListener("click", threeFunc);
function threeFunc() {  
  if (operator === "=")
    {
    document.querySelector("#operatorWindow").innerHTML = ""
    operator = undefined
    document.querySelector("#screen").innerHTML = 3
    displayValue = three
    }
  else if (displayValue == "0") 
    {
    document.querySelector("#screen").innerHTML = 3
    displayValue = three
    }
  else {
    document.querySelector("#screen").innerHTML = displayValue + 3
    displayValue = displayValue.concat(three)
    }
  if (displayValue.length > length) {
    alert(lengthWarning)
    displayValue = displayValue.substring(0,length)}
  }



const plusButton = document.querySelector("#plusButton");
plusButton.addEventListener("click", plusFunc);
function plusFunc() {
  if (operator == "/" && displayValue == "0") {alert(snark)}
  else if (operator === undefined || operator === "=")
    {a = parseFloat(displayValue)
    operator = "+"
    displayValue = ""
    }
  else if (operator !== undefined && displayValue == "") {
    operator = "+"
    }
  else if (operator !== undefined) {
    b = parseFloat(displayValue)
    a = parseFloat(a)
    a = operate(a, operator, b)
    a = tooMuch(a)
    document.querySelector("#screen").innerHTML = a
    displayValue =""
    operator = "+"
    }
    document.querySelector("#operatorWindow").innerHTML = operator
  }


const zeroButton = document.querySelector("#zeroButton");
zeroButton.addEventListener("click", zeroFunc);
function zeroFunc() {
  if (operator === "=" && displayValue == "0") 
    {displayValue="0"
    operator = undefined
    document.querySelector("#screen").innerHTML = "0"}
  else if (operator != "=" && displayValue == "0") 
    {displayValue="0"
    document.querySelector("#screen").innerHTML = "0"}
  else if (operator === "=" && displayValue.includes(".")){
      operator = undefined
      document.querySelector("#screen").innerHTML = displayValue + 0
      displayValue = displayValue.concat(zero)
    }
  else if (operator === "=" && !displayValue.includes(".")){
    displayValue=""
    operator = undefined
    document.querySelector("#screen").innerHTML = displayValue + 0
    displayValue = displayValue.concat(zero)
  }
  else {
    document.querySelector("#screen").innerHTML = displayValue + 0
    displayValue = displayValue.concat(zero)
  }
  if (displayValue.length > length) {
    alert()
    displayValue = displayValue.substring(0,length)}}




const backButton = document.querySelector("#backButton");
backButton.addEventListener("click", backFunc);
function backFunc() {
  displayValue = displayValue.substring(0,displayValue.length-1)
  document.querySelector("#screen").innerHTML = displayValue}

const decimalButton = document.querySelector("#decimalButton");
decimalButton.addEventListener("click", decimalFunc);
function decimalFunc() {
   if (displayValue.includes(".")) {
      alert("Only one decimal allowed")}
   else if (displayValue == "") {
    document.querySelector("#screen").innerHTML = displayValue + "0."
    displayValue = displayValue.concat("0.")
   }
   else if (displayValue != " ") {document.querySelector("#screen").innerHTML = displayValue + "."
    displayValue = displayValue.concat(".")}
  }

const evaluateButton = document.querySelector("#evaluateButton");
evaluateButton.addEventListener("click", evaluateFunc);
function evaluateFunc() {
  b = parseFloat(displayValue, 10)
  a = parseFloat(a)
  if (operator == "/" && b == "0") {alert(snark)}
  else if (operator == "=") {
    a = operate(a, operator, b)
    document.querySelector("#operatorWindow").innerHTML = "="
    a = tooMuch(a)
    document.querySelector("#screen").innerHTML = a
    operator = "="
    document.querySelector("#operatorWindow").innerHTML = operator
    displayValue = a
  }
  else 
  a = operate(a, operator, b)
  console.log(a)
  document.querySelector("#operatorWindow").innerHTML = "="
  a = tooMuch(a)
  document.querySelector("#screen").innerHTML = a
  operator = "="
  document.querySelector("#operatorWindow").innerHTML = operator
  displayValue = a
}

let keyboard = {
  48: zeroFunc,
  49: oneFunc,
  50: twoFunc,
  51: threeFunc,
  52: fourFunc,
  53: fiveFunc,
  54: sixFunc,
  55: sevenFunc,
  56: eightFunc,
  57: nineFunc,
  67: cFunc,
  191: divideFunc,
  88: xFunc,
  189: subtractFunc,
  187: plusFunc,
  8: backFunc,
  190: decimalFunc,
  13: evaluateFunc
};

document.onkeydown = checkKeyPressed
function checkKeyPressed(e) {
  if (keyboard[e.keyCode])
      keyboard[e.keyCode]();
}

// A bug I left alone:
// (1) Numbers over 9 digits are truncated, it would be nice to round
// but floating point means you need to allow .000000001 and 280.070001
// the number of spaces after decimals will vary.
