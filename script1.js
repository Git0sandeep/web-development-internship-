const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
let currentInput = '0';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;

    if (buttonText === 'C') {
      currentInput = '0';
    } else if (buttonText === '=') {
      try {
        currentInput = eval(currentInput).toString();
      } catch (error) {
        currentInput = 'Error';
      }
    } else {
      if (currentInput === '0' || currentInput === 'Error') {
        currentInput = buttonText;
      } else {
        currentInput += buttonText;
      }
    }

    display.textContent = currentInput;
  });
});
