// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

using System;
using System.Linq;

public static class Kata
{
  public static string Swap(string s)
  {
    var lstVowels = "aeiou";
    
    return String.Join("", s.Select(c => lstVowels.Contains(c) ? char.ToUpper(c) : c).ToList());
  }
}

public static class Kata
{
  public static string Swap(string s)
  {
    return s.Replace("a", "A")
            .Replace("e", "E")
            .Replace("i", "I")
            .Replace("o", "O")
            .Replace("u", "U");
  }
}