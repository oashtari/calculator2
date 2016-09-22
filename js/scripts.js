var add = function(input1, input2) {
  return input1 + input2;
};

var subtract = function(input1, input2) {
  return input1 - input2;
};

var multiply = function(input1, input2) {
  return input1 * input2;
};

var divide = function(input1, input2) {
  return input1 / input2;
};


  $(document).ready(function() {
    $("form#operator").submit(function(event) {
      var input1 = parseInt($("input#input1").val());
      var input2 = parseInt($("input#input2").val());
      var operator = $("input:radio[name=operator]:checked").val();
      var result;
      if (operator === "add") {
        result = add(input1, input2);
      } else if (operator === "subtract") {
        result = subtract(input1, input2);
      } else if (operator === "multiply") {
        result = multiply(input1, input2);
      } else if (operator === "divide") {
        result = divide(input1, input2);
      }
      $("#result").text(result);
      //  $("#toggleresult").show();

       event.preventDefault();
    });



  });
