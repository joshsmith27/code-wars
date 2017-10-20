// Given a number n, return the number of odd numbers below n, EASY!
//
// Kata.OddCount(7) => 3, i.e [1, 3, 5]
// Kata.OddCount(15) => 7, i.e [1, 3, 5, 7, 9, 11, 13]
// Expect large Inputs!
using System;

public static class Kata
{
  public static double OddCount(double n)
  {
    return Math.Floor(n / 2);

  }
}
