function testEven(n) {
    if(n < 0 ){
      return (n * -1) % 2 == 0 ? true : false;
    }else{
      return n % 2 == 0 ? true : false;
    }
}