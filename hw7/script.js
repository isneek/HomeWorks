// task1

   function timeList(){

      let endlist = false;
      const timelist = {};
        
       while (!endlist){
         let time = prompt("Задайте час");  
         let list = prompt("Задайте подію");
           if (!time){
            endlist = true; 
         } else {
            timelist[time] = list; 
         }
         console.log(`timelist` , timelist);
   };
       return timeList;
}
   
   timeList()


// task2

const salaries = {
    John: '1560',
    Mary: '1425.33',
    Peter: '1710.78',
    Ivan: '1653',
    Jack: '1700.65',
  };
  
  const getSalariesTotal = (salaries) => {
    let total = 0;
    for (let employee in salaries) {
      console.log(`employee`, employee);
      console.log(`salaries[employee]`, salaries[employee]);
      total += Number(salaries[employee]);
    }
      return total;
  };
  
  const totalResult = getSalariesTotal(salaries);
      console.log(`totalResult`, totalResult)
