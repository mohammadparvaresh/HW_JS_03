const calculator = {
  leftHand: +prompt("left hand number"),
  operator: prompt("operator"),
  rightHand: +prompt("right hand number"),
  result: 0,
  answerFunc: function () {
    switch (this.operator) {
      case "*":
        this.result = this.leftHand * this.rightHand;
        break;
      case "+":
        this.result = this.leftHand + this.rightHand;
        break;
      case "-":
        this.result = this.leftHand - this.rightHand;
        break;
      case "/":
        this.result = this.leftHand / this.rightHand;
        break;
      default:
        this.result = 000;
        break;
    }
  },
  logFunc: function () {
    console.log(calculator.leftHand);
    console.log(calculator.operator);
    console.log(calculator.rightHand);
    console.log(calculator.result);
  },
  callFunc: function () {
    this.answerFunc();
    this.logFunc();
  },
};

calculator.callFunc();
