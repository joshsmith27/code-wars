// https://www.codewars.com/kata/55c933c115a8c426ac000082
// Switch/Case - Bug Fixing #6
// Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?
using System;

public class Kata
{
  public static double EvalObject(double value1, double value2, char operation)
  {
    double result = 0;
    switch(operation)
    {
      case '+': 
        result = value1 + value2;
        break;
      case '-': 
        result = value1 - value2;
        break;
      case '/': 
        result = value1 / value2; 
        break;
      case '*': 
        result = value1 * value2; 
        break;
      case '%': 
        result = value1 % value2; 
        break;
      case '^': 
        result = Math.Pow(value1, value2);
        break;
    }
    return result;
  }
}