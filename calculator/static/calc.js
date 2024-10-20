let val1 = 0;
let val2 = 0;
let oper = "";
let result = 0;
let length = 0;
let op1 = document.querySelector("#op1");
let op2 = document.querySelector("#op2");

let numbers = document.querySelectorAll(".btn-normal");
let clr = document.querySelector("#clear");
let sqrt = document.querySelector("#sqrt");
let back = document.querySelector("#back");
let ans = document.querySelector("#result");
let operators = document.querySelectorAll("#op");

numbers.forEach((num) => {
  num.addEventListener("click", () => {
    op1.value += num.innerText;
  });
});

clr.addEventListener("click", () => {
  op1.value = "";
  op2.value = "";
  result = 0;
});

sqrt.addEventListener("click", () => {
  if (op1.value != "" || op1.value != 0) {
    op2.value = Math.sqrt(parseFloat(op1.value));
    op1.value = "";
  }
});

back.addEventListener("click", () => {
  let length = op1.value.length;
  if (length > 0) {
    op1.value = op1.value.substring(0, length - 1);
  }
});

operators.forEach((op) => {
  op.addEventListener("click", () => {
    if (op2.value != "" || op2.value != 0) {
      length = op2.value.length;
      val1 = parseFloat(op2.value.substring(0, length - 1));
      oper = op2.value.substring(length - 1);
      if (op1.value == "" || op1.value == 0) {
        val2 = 0;
      } else {
        val2 = parseFloat(op1.value);
      }
      console.log(val1, val2, oper);
      switch (oper) {
        case "+":
          result = val1 + val2;
          break;
        case "-":
          result = val1 - val2;
          break;
        case "*":
          result = val1 * val2;
          break;
        case "/":
          result = val1 / val2;
          break;
        case "%":
          result = val1 % val2;
          break;
        case "=":
          op1.value = result;
          op2.value = "";
        default:
          console.log("Invalid operator");
          break;
      }
      oper = op.innerText;
      op2.value = result + oper;
      op1.value = "";
    } else {
      val1 = parseFloat(op1.value);
      oper = op.innerText;
      console.log(val1, oper);
      op2.value = val1 + oper;
      op1.value = "";
    }
  });
});

ans.addEventListener("click", () => {
  if (op2.value != "" || op2.value != 0) {
    length = op2.value.length;
    val1 = parseFloat(op2.value.substring(0, length - 1));
    oper = op2.value.substring(length - 1);
    if (op1.value == "" || op1.value == 0) {
      val2 = 0;
    } else {
      val2 = parseFloat(op1.value);
    }
    console.log(val1, val2, oper);
    switch (oper) {
      case "+":
        result = val1 + val2;
        break;
      case "-":
        result = val1 - val2;
        break;
      case "*":
        result = val1 * val2;
        break;
      case "/":
        result = val1 / val2;
        break;
      case "%":
        result = val1 % val2;
        break;
      case "=":
        op1.value = result;
        op2.value = "";
      default:
        console.log("Invalid operator");
        break;
    }
    oper = "=";
    op2.value = result + oper;
    op1.value = "";
  } else {
    oper = "=";
    if (op1.value == "" || op1.value == 0) {
      val1 = 0;
    } else {
      val1 = parseFloat(op1.value);
    }
    result = val1;
    op2.value = result + oper;
    op1.value = "";
  }
});