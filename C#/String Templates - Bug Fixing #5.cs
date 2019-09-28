// https://www.codewars.com/kata/string-templates-bug-fixing-number-5/train/csharp

// String Templates - Bug Fixing #5
// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

using System;

public static class Kata 
{
    public static string buildString(string[] args)
    {
      return String.Format("I like {0}!", String.Join(", ", args));
    }
}