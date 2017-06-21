// If you like Taco Bell, you will be familiar with their signature doritos locos taco. They're very good.
//
// Why can't everything be a taco? We're going to attempt that here, turning every word we find into the taco bell recipe with each ingredient.
//
// We want to input a word as a string, and return a list representing that word as a taco.
//
// Key
//
// all vowels (except 'y') = beef
//
// t = tomato
//
// l = lettuce
//
// c = cheese
//
// g = guacamole
//
// s = salsa
//
// NOTE
// We do not care about case here. 'S' is therefore equivalent to 's' in our taco.
//
// Ignore all other letters; we don't want our taco uneccesarily clustered or else it will be too difficult to eat.
//
// Note that no matter what ingredients are passed, our taco will always have a shell.

function tacofy(word) {
  var arr = word.toLowerCase().split('');
  var x;
  var answer = ['shell'];
  for (x in arr){
    switch(arr[x]){
      case 't': answer.push('tomato');
      break;
      case 'l': answer.push('lettuce');
      break;
      case 'c': answer.push('cheese');
      break;
      case 'g': answer.push('guacamole');
      break;
      case 's': answer.push('salsa');
      break;
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      answer.push('beef');
      break;
    }
  }
 answer.push('shell');
 return answer;
}

//best answer
function tacofy(word) {
  var map = {t:'tomato',l:'lettuce',c: 'cheese',g: 'guacamole',s:'salsa',a:'beef',e:'beef',i:'beef',o:'beef',u:'beef'};
  return ['shell',...[...word].map(x => map[x.toLowerCase()]).filter(x=>x),'shell'];
}
