// https://www.codewars.com/kata/count-by-x/train/csharp

using System;
using System.Collections.Generic;
using System.Linq;
public static class Kata
{
  public static int[] CountBy(int x, int n)
  {
    List<int> z = new List<int>();
    for (int i = x; i <= n * x; i +=x)
    {
     z.Add(i);
    }
   
    return z.ToArray();
  }
}