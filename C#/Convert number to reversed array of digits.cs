using System;
using System.Collections.Generic;
using System.Linq;

namespace Solution
{
  class Digitizer
  {
    public static long[] Digitize(long n)
    {
      return n.ToString()
              .Reverse()
              .Select(t => Convert.ToInt64(t.ToString()))
              .ToArray();
    }
  }
}