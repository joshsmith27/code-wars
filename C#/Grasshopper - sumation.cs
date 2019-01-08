// Summation
// Write a program that finds the summation of every number from 1 to num.The number will always be a positive integer greater than 0.

// For example:

//     summation (2) - > 3
// 1 + 2

// summation (8) - > 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

using System;
using System.Collections.Generic;
using System.Linq;

public static class Kata {
    public static int summation (int num) {
        List<int> nums = new List<int> ();

        for (int i = 0; i <= num; i++) {
            nums.Add (i);
        }
        return nums.Sum (x => x);
    }
}

public static class Kata {
    public static int summation (int num) {
        return num * (num + 1) / 2;
    }
}

public static class Kata {
    public static int summation (int num) {
        return Enumerable.Range (1, num).Sum ();
    }
}