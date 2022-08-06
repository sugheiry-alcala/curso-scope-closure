function greeting() {
  let userName = 'Ana';
  console.log(userName);


  if (userName === 'Ana') {
    console.log(`Hello ${userName}!`)
  }
}

greeting();
console.log(userName);

nameOfDog("Elmo"); 
function nameOfDog(name)
 { 
  console.log(name);
 };


 const fruits = () => { 
  if (true) { 
    var fruit1 = 'apple';  // tiene el alcance de funtion scoope
    const fruit2 = 'banana'; // tiene el alcance de block scoope
    let fruit3 = 'kiwi'; // tiene el alcance de block scoope
  } 
  }