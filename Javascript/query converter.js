// In web developement. Using query to grab data is very common.

// Query starts with '?' after the link

// Example:

// Link: www.whatsup.com?name=huy&lastname=dang

// Query: ?name=huy&lastname=dang

// Write a function that return an object that contains all the datas in the query which are seperated by '&'

// Example: www.whatsup.com?name=Huy&lastname=Dang

// -> Query: ?name=Huy&lastname=Dang

// -> Should return: {name: 'Huy', lastname: 'Dang'}

// p/s: - No case sensitive, easy, keep it the way it is.

var solution = (str) => {
    var arr = str.split('?');
    debugger
    var queries = arr[1].split('&');
    var answer = queries.map((e)=>{
      var arr = e.split("=");
      var answer = {};
      answer[arr[0]] = arr[1];
      return answer;
    })
  var solution = {};
   answer.map((e)=>{
    Object.assign(solution, e);
   })
  return solution
}