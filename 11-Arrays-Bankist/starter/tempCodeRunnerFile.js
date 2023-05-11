  sumDogs.array.forEach(function(dog, index, array) {
    if(dog >= 3){
      console.log(`Dog number ${index} is an adult, and it is ${dog} years old`)
    } else {
      console.log(`Dog number ${index} is still a puppy`)
    }
  });