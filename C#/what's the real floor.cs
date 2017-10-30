// Task Overview
//
// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor ('cause of superstition).
//
// Write a function that given an American floor (passed as an integer) returns the real floor.
// Moreover, your function should work for basement floors too: just return the same value as the passed one.
//
// Usage Examples
//
// GetRealFloor(1) == 0
// GetRealFloor(0) == 0 // Special case to please Europeans
// GetRealFloor(5) == 4
// GetRealFloor(15) == 13
// GetRealFloor(-3) == -3

using System;

public static class Kata
{
  public static int GetRealFloor(int n)
  {
    if( n >= 13 ){
      return n -2;
    }else if( n <= 0){
      return n;
    }else{
      return n - 1;
    }
  }
}
