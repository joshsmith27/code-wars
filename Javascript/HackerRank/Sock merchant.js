// John works at a clothing store.He has a large pile of socks that he must pair by color for sale.Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// For example, there are  socks with colors.There is one pair of color  and one of color.There are three odd socks left, one of each color.The number of pairs is.

function sockMerchant(n, ar) {
    const arr2 = ar.reduce((obj, e) => {
        if (!Object.keys(obj).includes(e.toString())) {
            obj[e] = 1;
        } else {
            obj[e] = obj[e] + 1
        }
        return obj
    }, {})
    return Object.keys(arr2).reduce((sum, num) => {
        return sum += Math.floor(arr2[num] / 2)
    }, 0);

}