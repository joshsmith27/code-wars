// Complete the solution so that it reverses all of the words within the string passed in.

// Example:

// Kata.ReverseWords("The greatest victory is that which requires no battle");
// should return "battle no requires which that is victory greatest The"

using System;

public class Kata
{
    public static string ReverseWords(string s)
    {
        string[] strArray = s.Split(" ");
        Array.Reverse(strArray);
        return string.Join(" ", strArray);
    }
}

//best answer 

using System.Linq;

public class Kata
{
    public static string ReverseWords(string str)
    {
        return string.Join(" ", str.Split(' ').Reverse());
    }
}