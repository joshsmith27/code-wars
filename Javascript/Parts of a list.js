// Write a function partlist that gives all the ways to divide a list(an array) of at least two elements into two non - empty parts.

// Each two non empty parts will be in a pair(or an array for languages without tuples or a structin C - C: see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.
// Examples of returns in different languages:
// a = ["az", "toto", "picaro", "zone", "kiwi"]-- >

//     [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]

function partlist(arr) {
    return arr.reduce((r, e, i, a) => {
        const arr1 = a.slice()
        if ((i + 1) !== arr.length) {
            r.push([arr1.splice(0, i + 1).join(" "), arr1.join(" ")])
        }
        return r
    }, [])
}
const answer = partlist(["I", "wish", "I", "hadn't", "come"])
console.log(answer)