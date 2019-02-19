// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x>y - 3 points
// if x<y - 0 point
// if x=y - 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

using System.Linq;

public static class Kata
{
    public static int TotalPoints(string[] games)
    {
        int count = 0;
        for (int i = 0; i < games.Length; i++)
        {
            var nums = games[i].Split(":");
            if (int.Parse(nums[0]) > int.Parse(nums[1]))
            {
                count += 3;
            }
            else if (int.Parse(nums[0]) == int.Parse(nums[1]))
            {
                count += 1;
            }
            else
            {
                continue;

            }
        }
        return count;
    }
}

// using System.Linq;

public static class Kata
{
    public static int TotalPoints(string[] games)
    {
        return games.Sum(x => (x[0] - '0') > (x[2] - '0') ? 3 : (x[0] - '0') < (x[2] - '0') ? 0 : 1);
    }
}