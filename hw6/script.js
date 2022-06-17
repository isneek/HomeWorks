// task1

const registration = () => {

  let userName;
  let userSurname;
  let userPassword;

      do {
      userName = prompt("Ведіть ім'я: ");

      if(userName === null){
      return
      }

      if(userName !== null){
        userName = userName.charAt(0).toUpperCase() + userName.toLowerCase().slice(1);
        console.log(userName);
      }
    } while (!userName);

      do {
      userSurname = prompt("Введіть прізвище: ");

      if(userSurname === null){
        return
      };

      if(userSurname !== null){
        userSurname = userSurname.charAt(0).toUpperCase() + userSurname.toLowerCase().slice(1);
        console.log(userSurname);
      }
    } while (!userSurname);


    do {
    userPassword = prompt("Введіть пароль не меньше 6 символів: ");

    if(userPassword === null){
      return
    }

    if(userPassword !== null){
        console.log(userPassword);
        if(userPassword.length <=5){
        alert("Потрібно не меньше 6 символів");
        return;
    }else if(!isNaN(userPassword) || userPassword.toLowerCase() === userPassword || userPassword.toUpperCase() === userPassword){
        alert("Некоректний пароль")
        return
    }else{
      alert(`Welcome, ${userName} ${userSurname} !`)
      }
    }
    } while (!userPassword);
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


    
// // // task2/2

// const getRandomInteger = (min, max) => {
//     return Math.floor(min + Math.random() * (max +1 - min));
//   };
//   const integerRandom = getRandomInteger(5, 10);

//   console.log(`integerRandom`, integerRandom); 