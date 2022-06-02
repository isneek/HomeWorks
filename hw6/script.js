// task1

const registration = () => {
  let userName;
  let userSurname;
  let userPassword;

  do {
    userName = prompt("Введите имя: ");

    if(userName !== null){
      userName = userName.charAt(0).toUpperCase() + userName.toLowerCase().slice(1);
      console.log(userName);
      alert(userName);
    }
    
    } while (!userName);
      
    do {
      userSurname = prompt("Введите фамилию: ");

      if(userSurname !== null){
        userSurname = userSurname.charAt(0).toUpperCase() + userSurname.toLowerCase().slice(1);
        console.log(userSurname);
        alert(userSurname);}
    } while (!userSurname);

    do {
    userPassword = prompt("Введите пароль: ");

     if(userPassword !== null){
        console.log(userPassword);
        if(userPassword.length <=5){
        alert("Нужно не менее 6 символов");
        return;
     }
  }else{
    break;
  }
    } while (!userName);

     if(userName && userSurname && userPassword)
     {alert(`Welcome, ${userName} ${userSurname} !`);
    }
       
    };
  
    registration()



// // task2/1

// function randomInteger(min, max) {
//     const rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
//   }
  
//     // alert( randomInteger(10, 20) ); 
//     const integRandom = randomInteger(10, 20);

//     console.log(`integRandom`, integRandom);


    
// // task2/2

// const getRandomInteger = (min, max) => {
//     return Math.floor(min + Math.random() * (max +1 - min));
//   };
//   const integerRandom = getRandomInteger(5, 10);

//   console.log(`integerRandom`, integerRandom); 