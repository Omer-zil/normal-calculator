const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.dataset.num;

    //  CLEAR
    if (value === "C") {
      expression = "";
      display.innerText = "0";
      return;
    }

    //  DELETE
    if (value === "DEL") {
      expression = expression.slice(0, -1);
      display.innerText = expression || "0";
      return;
    }

    // EQUALS
    if (value === "=") {
      try {
        expression = eval(expression).toString();
        display.innerText = expression;
      } catch {
        display.innerText = "Error";
        expression = "";
      }
      return;
    }

    //  PERCENT
    if (value === "%") {
      try {
        expression = (eval(expression) / 100).toString();
        display.innerText = expression;
      } catch {
        display.innerText = "Error";
        expression = "";
      }
      return;
    }

    //  NORMAL INPUT (NUMBERS & OPERATORS)
    expression += value;
    display.innerText = expression;
  });
});
