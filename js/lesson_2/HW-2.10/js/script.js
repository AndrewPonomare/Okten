const firstNumber = +(prompt('Enter the first number'));
const secondNumber = +(prompt('Enter the second number'));

if (firstNumber > secondNumber) {
    console.log('Maximum number:', firstNumber);
} else if (secondNumber > firstNumber) {
    console.log('Maximum number:', secondNumber);
} else {
    console.log('The numbers are equal');
}
