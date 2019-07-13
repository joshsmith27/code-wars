// https://www.codewars.com/kata/get-the-mean-of-an-array/train/csharp

using System.Linq;
using System.Collections.Generic;
using System;

public class Kata
{
  public static int GetAverage(int[] marks)
  {
    return marks.Sum() / marks.Length;
  }
}