// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// #Example:

// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13

// using System;
using System;
using System.Linq;

public class MaxDiffLength 
{
    
    public static int Mxdiflg(string[] a1, string[] a2) 
    {  
        if(a1.Length < 1 || a2.Length < 1)
          return -1;
        int a1Long = a1.OfType<string>().ToList().OrderByDescending(x => x.Length).First().Length;
        int a1Short = a1.OfType<string>().ToList().OrderBy(x => x.Length).First().Length;
        int a2Long = a2.OfType<string>().ToList().OrderByDescending(x => x.Length).First().Length;
        int a2Short = a2.OfType<string>().ToList().OrderBy(x => x.Length).First().Length;    
        return (a1Long - a2Short) > (a2Long - a1Short) ? a1Long - a2Short : a2Long  - a1Short;
    }
}

// best answer
public class MaxDiffLength 
{   
    public static int Mxdiflg(string[] a1, string[] a2) 
    {
        return a1.Length==0|a2.Length==0 ? -1 : Math.Max(a1.Max(x=>x.Length)-a2.Min(x=>x.Length) , a2.Max(x=>x.Length)-a1.Min(x=>x.Length));
    }
}