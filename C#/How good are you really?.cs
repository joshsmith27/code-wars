// https://www.codewars.com/kata/how-good-are-you-really/train/csharp

using System.Linq;

public class Kata
{
  public static bool BetterThanAverage(int[] ClassPoints, int YourPoints)
  {
    return YourPoints > ClassPoints.Sum() / ClassPoints.Length;
  }
}