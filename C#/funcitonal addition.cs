// Create a function add(n)/Add(n) which returns a function that always adds n to any number

// Note for Java: the return type and methods have not been provided to make it a bit more challenging.

// Func<double, double> AddOne = Kata.Add(1);
// AddOne(3) => 4


using System;

public static class Kata
{

    public static Func<double, double> Add(double n)
    {

        return x => x + n;
    }
}