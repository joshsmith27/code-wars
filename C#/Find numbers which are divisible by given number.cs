// Write a function which takes two arguments and returns all numbers which are divisible by given divisor. First argument is array of numbers and the second is divisor.

// Example
// DivisibleBy(new int[]{ 1, 2, 3, 4, 5, 6}, 2) == new int[] {2, 4, 6}

using System.Linq;

public class Kata
{
    public static int[] DivisibleBy(int[] numbers, int divisor)
    {
        return numbers.Where(x => x % divisor == 0).ToArray();
    }
}