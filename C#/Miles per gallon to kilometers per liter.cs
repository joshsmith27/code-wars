// https://www.codewars.com/kata/miles-per-gallon-to-kilometers-per-liter/train/csharp
using System;
using System.Collections.Generic;
public static class Kata
{
	public static double Converter(int mpg)
	{
		double gallon = 4.54609188;
    double kilometers = 1.609344;
    return Math.Round(mpg * kilometers / gallon, 2);
	}
}