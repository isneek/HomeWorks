//Task 1

const data = [
    {
      name: "John",
      age: 24,
      position: "senior",
      isActive: false,
    },
    {
      name: "Peter",
      age: 33,
      position: "middle",
      isActive: false,
    },
    {
      name: "Sam",
      age: 29,
      position: "junior",
      isActive: true,
    },
    {
      name: "Mary",
      age: 24,
      position: "middle",
      isActive: false,
    },
    {
      name: "Steve",
      age: 23,
      position: "middle",
      isActive: true,
    },
    {
      name: "Kate",
      age: 31,
      position: "middle",
      isActive: false,
    },
    {
      name: "Sally",
      age: 19,
      position: "junior",
      isActive: false,
    },
    {
      name: "Jack",
      age: 19,
      position: "middle",
      isActive: true,
    },
  ];


const filteringArrayOfObjects = (data, filter) =>{

    { age: 19}

    for(let filterItem in filter){


        // console.log(filterItem)

        for(let item of data){

            // console.log(item)

            for(let key in item){

                // console.log(key)

                if(filter[filterItem] === item[key]){ //19 age 
                    console.log(item)

                }
                
            }

        }

    }
}

const filteringArrayOfObjects = (data, filter) =>{


    for(let filterItem in filter){

        return data.filter(
            (item) => {
                for(let key in item){

                    if(filter[filterItem] === item[key]){
                        return true 
                    }
                    
                }
            }
        )
    }
    
}



let resFiltered = filteringArrayOfObjects(data, {age: 19})
console.log(resFiltered)