// DEFINE UI VARS

const submitButton = document.querySelector('.btn-dark');
// const taskList = document.querySelector('.collection');
// const clrButton = document.querySelector('.clear-tasks');
// const filter = document.querySelector('#filter');
// const taskInput = document.querySelector('#task');
// LOAD ALL EVENT LISTENERS
loadEventListners();
function loadEventListners() {
  // Listent for sumbit
   submitButton.addEventListener('click', function(e) {
    //hide Results
    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
    // Show loadEr
    setTimeout(pressSubmit, 2000);
    e.preventDefault();
  });

}

//pressSubmitFunction

function pressSubmit() {

  console.log("..calculating");

  //UI variables

  const amoutn = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute the monthly calcultedPayments

  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  if (isFinite(monthly)) {
    document.getElementById('results').style.display = 'block';
    document.getElementById('loading').style.display = 'none';
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
  } else {
    showError('Check the input value');
  }

}

function showError(error) {
  // create div
  const errorDiv = document.createElement('div');
  errorDiv.className = 'alert alert-danger'

  //Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  //Create text node and apend to errorDiv
  errorDiv.appendChild(document.createTextNode(error));

  //Isert text above heading
  card.insertBefore(errorDiv, heading);

  //ClearError

  window.setTimeout(ClearError, 3000);
  document.getElementById('loading').style.display = 'none';
}

function ClearError() {
  document.querySelector('.alert').remove();
}
