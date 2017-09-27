using System;
using System.Linq;
using System.Collections.Generic;

public static class Kata
{
  public static string CannonsReady(Dictionary<string, string> gunners)
  {
    return gunners.ContainsValue("nay") ? "Shiver me timbers!" :"Fire!";
  }
}
