// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

// using System;

// My Answer
public class Kata
{
    public static string AreYouPlayingBanjo(string name)
    {
        return Char.ToLower(name[0]) == 'r' ? name + " plays banjo" : name + " does not play banjo";
    }
}

// Best answer

public class Kata
{
    public static string AreYouPlayingBanjo(string name)
    {
        return string.Format("{0} {1} banjo", name, char.ToLower(name[0]) == 'r' ? "plays" : "does not play");
    }
}