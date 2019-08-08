// https://www.codewars.com/kata/enumerable-magic-number-1-true-for-all/train/csharp

using System;
using System.Linq;

public class Kata
{
  public static bool All(int[] arr, Func<int, bool> fun)
  {
    bool answer = true;
    for(int i = 0; i < arr.Length; i++)
    {
      if(!fun(arr[i]))
      {
      answer = false;
      }
    }
    return answer;
  }
}

public class Kata
{
  public static bool All(int[] arr, Func<int, bool> fun)
  {
    return arr.All(fun);
  }
}