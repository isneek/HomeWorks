// //task 1

// let firstNumber;
// let secondNumber;

// firstNumber = Number(prompt('Введите Первое число: '));
// alert('Вы ввели число: ' +firstNumber);
// console.log('firstNumber', firstNumber);


// secondNumber = Number(prompt('Введите Второе число: '));
// alert('Вы ввели число: ' +secondNumber);
// console.log('secondNumber', secondNumber);

// alert('Вы ввели числа: ' +firstNumber + ' и ' +secondNumber);


// if (firstNumber > secondNumber){
//     alert('Первое число больше второго');
//     console.log('Первое число больше второго');
// }
// if (firstNumber < secondNumber){
//     alert('Второе число больше первого');
//     console.log('Второе число больше первого');
// }
// if(firstNumber === secondNumber){
//     alert('Числа равны');
//     console.log('Числа равны');
// };

// //task 2

// let num1 = prompt('первое число');
// num1 = Number(num1);

// let num2 = prompt('второе число');
// num2 = Number(num2);

// let operator = prompt('оператор (/,+,*,-)');


// switch (operator) {
//     case '+':
//         alert (num1 + num2);
//         console.log(num1 + num2);
//         break;

//     case '-':
//         alert (num1 - num2);
//         console.log(num1 - num2);
//         break;

//     case '*':
//         alert (num1 * num2);
//         console.log(num1 * num2);
//         break;

//     case '/':
//         alert (num1 / num2);
//         console.log(num1 / num2);
//         break;

//     default:
//         alert ('incorrect');
// }


//task 3

    const MIN_AGE = 12;
    const MAX_AGE = 80;
    const minAge = 18;
    const maxAge = 60;
    const visitorAge = Number(prompt('Сколько Вам лет?'));
    

    if (visitorAge < MIN_AGE || visitorAge > MAX_AGE){
        console.log('Ваш возраст слишком мал или велик для посещения.');
    } else if (visitorAge < minAge ||visitorAge >= maxAge){
        console.log('Вход разрешен с разрешения взрослых!');

    const isConfirmed = confirm(`У Вас есть разрешение взрослых от 18 до 60 лет?`);
        console.log('Вход разрешен!');

    } else {
        console.log('Вход разрешен!');
    };
    
