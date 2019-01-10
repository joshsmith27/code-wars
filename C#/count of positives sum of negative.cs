// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null,
// return an empty array.

// Example
// For input[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should
// return [10, -65].

using System;
using System.Collections.Generic;
using System.Linq;

public class Kata {
    public static int[] CountPositivesSumNegatives (int[] input) {
        return input == null || input.Count () == 0 ? new int[] { } : new int[] { input.Count (x => x > 0), input.Where (x => x < 0).Sum () };

    }
}

//alternative answer

public class kataAlternative {
    public static int[] CountPositivesSumNegatives (int[] input) {
        int c = 0;
        int s = 0;
        if (input == null || input.Length == 0) {
            return new int[] { };
        }
        for (int i = 0; i < input.Length; i++) {
            if (input[i] > 0) {
                c += 1;
            }
            if (input[i] < 0) {
                s += input[i];
            }
        }
        return new int[] { c, s };
    }
}
