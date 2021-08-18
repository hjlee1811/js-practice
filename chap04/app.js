let numOne = '';
let opreator = '';
let numTwo = '';

const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');
const onClickNumber = (event) => {
  if(!opreator) {
    numOne += event.target.textContent;
    $result.value += event.target.textContent;
    return;
  }
  if(!numTwo) {
    $result.value = '';
  }
  numTwo += event.target.textContent;
  $result.value += event.target.textContent;
};
document.querySelector('#num0').addEventListener('click', onClickNumber);
document.querySelector('#num1').addEventListener('click', onClickNumber);
document.querySelector('#num2').addEventListener('click', onClickNumber);
document.querySelector('#num3').addEventListener('click', onClickNumber);
document.querySelector('#num4').addEventListener('click', onClickNumber);
document.querySelector('#num5').addEventListener('click', onClickNumber);
document.querySelector('#num6').addEventListener('click', onClickNumber);
document.querySelector('#num7').addEventListener('click', onClickNumber);
document.querySelector('#num8').addEventListener('click', onClickNumber);
document.querySelector('#num9').addEventListener('click', onClickNumber);

const onClickOperator = (op) => () => {
  if(numOne) {
    opreator = op;
    $result.value = op;
  } else {
    alert('숫자를 먼저 입력하세요.');
  }
};
document.querySelector('#plus').addEventListener('click',onClickOperator('+'));
document.querySelector('#minus').addEventListener('click', onClickOperator('-'));
document.querySelector('#divide').addEventListener('click', onClickOperator('/'));
document.querySelector('#multiply').addEventListener('click', onClickOperator('*'));
document.querySelector('#calculate').addEventListener('click', () => {
  if(numOne) {
    switch(opreator) {
      case '+':
        $result.value = parseInt(numOne) + parseInt(numTwo);
        break;
      case '-':
        $result.value = numOne - numTwo;
        break;
      case '*':
        $result.value = numOne * numTwo;
        break;  
      case '/':
        $result.value = numOne / numTwo;
        break;
      default:
        break;
    }
    $operator.value ='';
    numOne = $result.value;
    opreator = '';
    numTwo = '';
  } else {
    alert('숫자를 먼저 입력하시오.');
  }
});
document.querySelector('#clear').addEventListener('click', () => {
  numOne = '';
  opreator = '';
  numTwo = '';
  $operator.value = '';
  $result.value = '';
});