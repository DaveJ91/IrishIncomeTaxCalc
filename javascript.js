var myInc = 0;
var tax = 0;
var usc = 0;
var taxCredits = 0;
var prsi = 0;
var srcop = 34550;

function taxCalculator(income) {
  if (income < srcop) {
    tax = income * .20;
  } else {
    var standardRate = srcop * .20;
    var marginalRate = ((income - srcop) * .40);
    tax = standardRate + marginalRate

  }
return tax;
}

function taxCreditsCalc(tax){
  if (tax <= 3300) {
    taxCredits = tax;
  } else {
    taxCredits = 3300;
  }
return taxCredits;
}

function uscCalculator(income) {
  if (income < 12012) {
    usc = income * .005;
  } else if (income < 19372) {
    usc = (12012 * .005) + ((income-12012) * .02);
  } else if (income < 70044) {
    usc = (12012 * .005) + (7360 * .02) + ((income- 19372) * .0475);
  } else {

  }
return usc;
}

function prsiCalculator(income){
 prsi = income * .04;
 return prsi;
}


function calculateNetPay(myInc){
  var tax = taxCalculator(myInc);
  var taxCredits = taxCreditsCalc(myInc);
  var usc = uscCalculator(myInc);
  var prsi = prsiCalculator(myInc);
  var netPay = myInc - tax + taxCredits - usc - prsi;
  return Math.round(netPay);
  console.log(tax);
  console.log(taxCredits);
  console.log("Your net yearly income is " + netPay);
  console.log("Your net monthly income is " + (netPay/12));
}

function myFunction() {
  var netPay = document.getElementById('income').value;
  document.getElementById('demo').innerHTML = "Your net pay is: €" + Math.round(calculateNetPay(netPay));
}

calculateNetPay(4000);
