// They say that only the name is long enough to attract attention.They also said that only a simple Kata will have someone to solve it series #1:
// Are they opposite?

// # Task
// Give you two strings : s1 and s2.If they are opposite,
//     return true;
// otherwise,
// return false.Note : The result should be a boolean value, instead of a string.

// The opposite means : All letters of the two strings are the same, but the
// case is opposite.you can assume that the string only contains letters or it 's a empty string

// #Some examples:
// isOpposite ("ab","AB") should return true;
// isOpposite ("aB","Ab") should return true;
// isOpposite ("aBcd","AbCD") should return true;
// isOpposite ("AB","Ab") should return false;
// isOpposite ("","") should return false;

using System;
using System.Linq;

public class Kata {
    public static bool IsOpposite (string s1, string s2) {

        var s1Arr = s1.ToCharArray ();
        var s2Arr = s2.ToCharArray ();

        if (s1 == "") return false;
        if (s1Arr.Length != s2Arr.Length) return false;

        for (int i = 0; i < s1Arr.Length; i++) {
            if (s1Arr[i] == s2Arr[i] || s1Arr[i].ToString ().ToUpper () != s2Arr[i].ToString ().ToUpper ()) {
                return false;
            }
        }

        return true;
    }
}

// using System;
// using System.Linq;
public class Kata {
    public static bool IsOpposite (string s1, string s2) => string.IsNullOrEmpty (s1) ? false :
        s1.SequenceEqual (s2.Select (e => Char.IsLower (e) ? Char.ToUpper (e) : Char.ToLower (e)));
}