// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// Note: in C#, you'll always get the input as a string, so the above applies if the string isn't representing a double value.

public class Kata
{
    public static string Problem(String a)
    {
        try
        {
            return (Convert.ToDouble(a) * 50 + 6).ToString();
        }
        catch
        {
            return "Error";
        }
    }
}

// using System;

public class Kata
{
    public static String Problem(String Input)
    {
        Double value;
        return (Double.TryParse(Input, out value)) ? (value * 50 + 6).ToString() : "Error";
    }
}