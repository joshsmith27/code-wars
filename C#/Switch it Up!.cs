// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// Try using "Switch" statements.

// This kata is meant for beginners. Rank and upvote to bring it out of beta

public class Kata
{
    public static string SwitchItUp(int number)
    {
        switch (number)
        {
            case 9:
                return "Nine";
            case 8:
                return "Eight";
            case 7:
                return "Seven";
            case 6:
                return "Six";
            case 5:
                return "Five";
            case 4:
                return "Four";
            case 3:
                return "Three";
            case 2:
                return "Two";
            case 1:
                return "One";
            default:
                return "Zero";
        }
    }
}

// best answer

// using System.Collections.Generic;
public class Kata
{
    public static string SwitchItUp(int number)
    {
        var dic = new Dictionary<int, string>()
    {
      {1, "One"},
      {2, "Two"},
      {3, "Three"},
      {4, "Four"},
      {5, "Five"},
      {6, "Six"},
      {7, "Seven"},
      {8, "Eight"},
      {9, "Nine"},
      {0, "Zero"}
    };
        return dic[number];
    }
}