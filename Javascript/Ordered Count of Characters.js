// Count the number of occurrences of each character and return it as a list of tuples in order of appearance.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

var orderedCount = function (text) {
    const textArr = text.split(''); 
    const unique = textArr.filter((elem, i, arr) => {
        if (arr.indexOf(elem) === i) {
          return elem
        }
      })
   return unique.reduce((r, e) => {
        r.push([e, textArr.filter(el => el === e).length])
        return r
   }, [])
  }
  console.log(orderedCount("abracadabra"))
  
  //best answer
//   const orderedCount = s =>
//   Array.from(s.split('').reduce((m, k) => m.set(k, m.has(k) ? m.get(k) + 1 : 1), new Map()));