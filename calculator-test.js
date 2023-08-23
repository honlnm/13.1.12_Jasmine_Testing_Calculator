
it('should calculate the monthly rate correctly', function () {
  document.getElementById("loan-amount").value = 10000;
  document.getElementById("loan-years").value = 5;
  document.getElementById("loan-rate").value = 0.02;
  expect(calculateMonthlyPayment()).toBe("175.28");

});


it("should return a result with 2 decimal places", function () {
  document.getElementById("loan-amount").value = 10000;
  document.getElementById("loan-years").value = 5;
  document.getElementById("loan-rate").value = 0.02;
  const result = calculateMonthlyPayment();
  let charNum = result.length - 3;
  let lastThree = result.substring(charNum);
  expect(lastThree.startsWith(".")).toBe(true);
});

it("should return a type of string", function () {
  document.getElementById("loan-amount").value = 10000;
  document.getElementById("loan-years").value = 5;
  document.getElementById("loan-rate").value = 0.02;
  let type = typeof calculateMonthlyPayment();

  expect(type).toBe("string");
});
/// etc
