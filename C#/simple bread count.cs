// Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

// r bb r bb r bb r bb r bb r

// Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
// If there are less than 2 blue beads return 0.

// using System;

public static class Kata
{
    public static int CountRedBeads(int n)
    {
        return n > 2 ? (n - 1) * 2 : n == 2 ? 2 : 0;
    }
}