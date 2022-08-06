var a; // declaracion devariable (no se usan)
var b = 'b'; //declaramos y aasignamos 
b = 'bb'; // reasignacion
var a = 'aa' // redeclaracion


// Global Scope
var fruit = 'Apple' // global
console.log(fruit);
function bestFruit() {
  console.log(fruit);
}

bestFruit(); 

function countries(){
  country='Colombia'; 
  console.log(country);
}
countries();
console.log(country);
