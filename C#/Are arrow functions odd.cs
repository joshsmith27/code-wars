// Time to test your basic knowledge in functions! Return the odds from a list:
//
// Kata.Odds(new List<int> {1,2,3,4,5}) => new List<int> {1,3,5};

using System.Collections.Generic;
using System.Linq;

public static class Kata
{
  public static List<int> Odds(List<int> values) =>
    // arrow it
    values.Where( x => x %2 != 0)
          .ToList();
}
