// task1

function add(a, b) {
  
  const sum = a + b;
  console.log(`sum`, sum);
  }
  
  add(12, 10);
  add(40, 15);
  add(-100, 95);



  const sum =(a, b) =>{
  const res = a + b;
  console.log(res);
  }

  sum(25, 33);
  sum(12, 5);
  sum(50, -95)
  

 
// task2

function ageGreeting(){
  const userName = prompt('Введите Ваше имя');
  const userAge = prompt('Сколько Вам лет?');

  console.log('userName',  userName);
  console.log('userAge', +userAge);

  if (userAge > 30) {
      alert('Здравствуйте, ' + userName + '!');
  }else{
      alert('Привет, ' +  userName + '!');
  }
};

ageGreeting()


// task3

function pow(a, b = 2){
  return a ** b
};

  const res = pow(4, 3);
  console.log(res);



function pow1(a, b) {
  let result = a;
  for (let i = 1; i < b; i++) {
    result **= a;
  }
  return result;
}

let a = 5;
let b = 3;
console.log(a ** b);








