using System;
using System.Linq;

public class Kata
{
  public static string ArrowFunc(int[] arr)
  {
    return string.Join("", arr.Select(x => Tools.FromCharCode(x)).ToArray());
  }
}