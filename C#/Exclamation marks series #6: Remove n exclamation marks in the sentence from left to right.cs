// Description:
// Remove n exclamation marks in the sentence from left to right. n is positive integer.

// Examples
// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"
// Note
// Please don't post issue about difficulty or duplicate.

using System;
using System.Collections.Generic;
using System.Linq;

public class Kata
{
  public static string Remove(string s, int n)
  {
    string answer = "";
    foreach(var st in s)
    {
      if(n <= 0)
      {
        answer+= st;
      }
      else if (st != '!')
      {
          answer+= st;
      }
      else
      {
        n--;
      }
    }
    return answer;
  }
}

// using System.Text.RegularExpressions;

public class Kata
{
  public static string Remove(string s, int n) =>
    new Regex("!").Replace(s, "", n);
}