// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.



using System;
using System.Linq;
using System.Collections.Generic;

public class Kata
{
    public static string Stringy(int size)
    {
        List<string> nums = new List<string>();
        for (int i = 0; i < size; i++)
        {
            if (i == 0 || i % 2 == 0)
            {
                nums.Add("1");
            }
            else
            {
                nums.Add("0");
            }
        }
        return string.Join("", nums);
    }
}

// using System.Linq;

public class Kata
{
    public static string Stringy(int size)
    {
        return string.Join("", Enumerable.Range(0, size).Select(x => (x + 1) % 2));
    }
}