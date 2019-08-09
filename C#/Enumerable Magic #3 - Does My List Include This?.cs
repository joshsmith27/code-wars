// https://www.codewars.com/kata/enumerable-magic-number-3-does-my-list-include-this/train/csharp

using System;
using System.Linq;

public class Kata
{
  public static bool Include(int[] arr, int item)
  {
    return arr.Any(x => x == item);
  }
}

public class Kata
{
  public static bool Include(int[] arr, int item)
  {
    return arr.Contains(item);
  }
}