// Write a class function named repeat() that takes two arguments (a string and a long integer), and returns a new string where the input string is repeated that many times.

// Example:
// Repeater.repeat("a", 5)
// should return

// "aaaaa"

using System;
using System.Collections.Generic;

public class Kata
{
    public static string Repeater(string s, int n)
    {
        List<string> listOfStrings = new List<string>();
        for (int i = 0; i < n; i++)
        {
            listOfStrings.Add(s);
        }
        return string.Join("", listOfStrings);
    }

}