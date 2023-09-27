const billInput = document.querySelector('.input-bill');
const peopleInput = document.querySelector('.number-of-people');
const tipPerPerson = document.querySelector('.amount');
const totalPerPerson = document.querySelector('.total-amount');
const tips = document.querySelectorAll('.tips')
const customTip = document.querySelector('.custom-tip-input');

billInput.addEventListener("input", billInputFun);
peopleInput.addEventListener("input", peopleInputFun);
tips.forEach(function(val){
  val.addEventListener("click", clickButton);
})
customTip.addEventListener('input', customTipFun);

billInput.value = '0.00';
peopleInput.value = '1';
tipPerPerson.innerHTML = '$' + (0.00).toFixed(2);
totalPerPerson.innerHTML = '$' + (0.00).toFixed(2);


let billValue = 0.00;
let peopleValue = 1;
let tipValue = 0.15;



function billInputFun() {
  billValue = parseFloat(billInput.value);
  calculateTip();
}


function peopleInputFun() {
  peopleValue = parseFloat(peopleInput.value);
  calculateTip();
}

function customTipFun() {
  tipValue = parseFloat(customTip.value/100);

  tips.forEach(function(val){
    val.classList.remove('active-tip');
  })
  calculateTip();
}

function clickButton(event) {
  tips.forEach(function(val) {
    val.classList.remove('active-tip');
    if (event.target.innerHTML === val.innerHTML) {
      val.classList.add('active-tip');
      tipValue = parseFloat(val.innerHTML)/100;
    }
  });
  calculateTip();
}

function calculateTip() {
  if (peopleValue >= 1) {
    let tipAmount = (billValue * tipValue)/peopleValue;
    let total = (billValue / peopleValue) + tipAmount;
    tipPerPerson.innerHTML = '$' + tipAmount.toFixed(2);
    totalPerPerson.innerHTML = '$' + total.toFixed(2);
  }
}

function reset() {
  billInput.value = '0.00';
  billInputFun();
  peopleInput.value = '1';
  peopleInputFun();
  customTip.value = ''
}
