// Write a reverseWords function that accepts a string a parameter, and reverses each word in the string. Every space should stay, so you cannot use words from Prelude.
//
// Example:
//
// ReverseWords("This is an example!"); // returns  "sihT si

using System;
using System.Linq;
public static class Kata
{
  public static string ReverseWords(string str)
  {
		char[] charArray = str.ToArray();
    Array.Reverse( charArray );
     var S = new string( charArray );
     var arr =  S.Split(' ').Reverse();
     return String.Join(" ", arr);
  }
}

//best answer
using System;
using System.Linq;

public static class Kata
{
  public static string ReverseWords(string str) => String.Join(" ", Enumerable.Reverse(String.Concat(Enumerable.Reverse(str.ToCharArray())).Split(' ')));
}
