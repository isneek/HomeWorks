// task1

const LOGIN = "ADMIN";
const PASSWORD = "1q2w3e";

const authorize = () => {
  let userLogin;
  let userPassword;
  let isAuthSuccess = false;
  let attempt = 3;

  do  
    {userLogin = prompt("Логин:");
    if (!userLogin) {
      alert("Введите логин");
      continue;
    }
 
    userPassword = prompt("Пароль:");
    if (!userPassword) {
      alert("Введите пароль");
      continue;
    }
    
    if (userLogin === LOGIN && userPassword === PASSWORD) {
      isAuthSuccess = true;
      alert("Welcome");
      break;

    } else {
      alert("Данные неверны!");
    }

    attempt--;
    alert(`Осталось ${attempt} попыток`);

    if(attempt === 0){
      alert("Попытки закончились");
      break;
    }

    } while (!isAuthSuccess)
      
  }
    authorize();


    // task2

let n = 20;

for (let i = 2; i <= n; i++) {
 for (let j = 2; j <= i; j++) {
    if ((i % j == 0) && (j != i)){
      break;
    }else{
      console.log(i);
      break;
    }
  }
}