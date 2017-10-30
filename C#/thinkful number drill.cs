using System;

public static class Kata
{
  public static bool IsDivisible(int wallLength, int pixelSize)
  {
    if(wallLength % pixelSize == 0)
    {
      return true;
    }
    else
    {
     return false;
     }
  }
}
