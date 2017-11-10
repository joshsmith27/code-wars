// Get the number n to return the reversed sequence from n to 1.

// Example : n==5 >> [5,4,3,2,1]

using System;
using System.Collections.Generic;  
public static class Kata
{
  public static int[] ReverseSeq(int n)
  {
    List<int> termsList = new List<int>();
    for (int i = n; i > 0; i--){
     termsList.Add(i);
    }
    int[] answer = termsList.ToArray();
    return answer;
    
  }
}