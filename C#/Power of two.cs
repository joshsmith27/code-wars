// Complete the function that determines if a given number is a power of two.

// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

// https://en.wikipedia.org/wiki/Power_of_two

// Examples
// power_of_two?(1024) # true
// power_of_two?(4096) # true
// power_of_two?(333)  # false

using System;

public static class Kata
{
    public static bool PowerOfTwo(int n) => Math.Log(n, 2) % 1 == 0;
}