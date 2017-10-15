// Create a function that takes a number as an argument and returns a grade based on that number.
//
// Score	Grade
// Anything greater than 1 or less than 0.6	'F'
// 0.9 or greater	"A"
// 0.8 or greater	"B"
// 0.7 or greater	"C"
// 0.6 or greater	"D"

public class Kata
{
  public static char Grader(double score)
  {


    if(score >= 0.9 && score <= 1)
    {
      return 'A';
    }
      else if(score >= 0.8 && score <= 1)
    {
      return 'B';
    }
      else if(score >= 0.7 && score <= 1)
    {
      return 'C';
    }
    else if(score >= 0.6 && score <= 1)
    {
      return 'D';
    }else{
      return 'F';
    }
  }
}
// best answer

public class Kata
{
  public static char Grader(double v) => v > 1 || v < 0.6 ? 'F' : v >= 0.9 ? 'A' : v >= 0.8 ? 'B' : v >= 0.7 ? 'C' : 'D';
}
