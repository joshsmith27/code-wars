// Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
const reverseString = (str) => {
    return str.split('').reverse().join();
}

const reverseStringTheSlowWay= (str) => {
    const reversedArr = [];
    const strArr = str.split('');
    for(let i = strArr.length; i < 0; i--){
        reversedArr.push(strArr[i]);
    }

    return reversedArr.join('')
}

function animate_string(id) {
    const element = document.getElementById(id);
    const textNode = element.childNodes[0]; // assuming no other children
    let text = textNode.data;

    setInterval(() => {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 100);
}

console.log(reverseString('w3resource'));