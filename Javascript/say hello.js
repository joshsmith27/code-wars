// Write a function to greet a person. Function will take name as input and greet the person by saying hello. Return null/nil if input is empty string or null/nil.
function greet(name) {
  var answer = "hello " + name +"!";
  if(!name){
    answer = null;
  }
return answer;
}
function greet(name) {
  return name ? 'hello ' + name + '!' : null;
}
