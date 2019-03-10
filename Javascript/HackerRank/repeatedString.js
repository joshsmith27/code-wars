function repeatedString(s, n) {
    // n >= x * s.length
    const stuff = n / s.length;
    console.log(Math.ceil(stuff) * s.length)

}
  
  console.log(repeatedString('aba', 10))