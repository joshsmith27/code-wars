// Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.

using System;

public class Kata
{
    public static bool None(int[] arr, Func<int, bool> fun)
    {
        bool any = true;
        for (int i = 0; i < arr.Length; i++)
        {
            if (fun(arr[i]))
            {
                any = false;
                break;
            }
        }
        return any;
    }
}

// using System;
// using System.Linq;

public class Kata
{
    public static bool None(int[] arr, Func<int, bool> fun)
    {
        return !arr.Any(fun);
    }
}