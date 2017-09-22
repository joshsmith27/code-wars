// Description:
//
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
//
// Examples
//
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"
using System;
public static class Kata
{
  public static string Replace(string s)
  {

    return s.Replace('a', '!').Replace('e', '!').Replace('i', '!').Replace('o', '!').Replace('u', '!').Replace('A', '!').Replace('E', '!').Replace('I', '!').Replace('O', '!').Replace('U', '!');
  }
}
// best answer
using System.Text.RegularExpressions;

public static class Kata
{
  public static string Replace(string s)
   => Regex.Replace(s, @"[aeiou]","!", RegexOptions.IgnoreCase);
}
