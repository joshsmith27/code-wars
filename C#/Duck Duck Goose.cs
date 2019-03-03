// The objective of 'Duck, duck, goose' is to walk in a circle, tapping on each player's head until one is finally chosen. 

// Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player. 

// Example:

// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name
// // PHP only
// duck_duck_goose([$a, $b, $c, $d], 1); // => $a["name"]
// duck_duck_goose([$a, $b, $c, $d], 5); // => $a["name"]
// duck_duck_goose([$a, $b, $c, $d], 4); // => $d["name"]

using System;
public class Kata
{
    public static string DuckDuckGoose(Player[] players, int goose)
    {
        if (goose <= players.Length)
        {
            return players[goose - 1].Name;
        }
        else
        {
            return DuckDuckGoose(players, loopPlayer(players.Length, goose));
        }
    }

    public static int loopPlayer(int len, int ind)
    {
        return ind - len;
    }
}
public class Player
{
    public string Name { get; set; }

    public Player(string name)
    {
        this.Name = name;
    }
}