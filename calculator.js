window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});


// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = 10000;
  document.getElementById("loan-years").value = 5;
  document.getElementById("loan-rate").value = 0.065;
  update();
}

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  values = Object.values(getCurrentUIValues());
  const principle = +values[0];
  const numPymts = +values[1] * 12;
  const monthlyInt = +values[2] / 12;
  const top = (principle * monthlyInt);
  const bottom1 = (1 + monthlyInt);
  const bottom2 = numPymts * -1;
  const bottom3 = (Math.pow(bottom1, bottom2));
  const bottom = (1 - bottom3);
  const monthlyPymt = top / bottom;
  const prettyMonthlyPymt = monthlyPymt.toFixed(2);
  return prettyMonthlyPymt.toString();
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  monthly = calculateMonthlyPayment();
  document.getElementById("monthly-payment").innerHTML = monthly;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly();
}
