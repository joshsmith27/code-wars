// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
public class Kata
{
  public static string RemoveExclamationMarks(string s)
  {
    return s.Replace("!", "");
  }
}

/// best answer


public class Kata
{
  public static string RemoveExclamationMarks(string s)
  {
    StringBuilder sb = new StringBuilder();
    foreach( var c in s)
    {
      if( c != '!')
        sb.Append(c);
    }
    
    return sb.ToString();
  }
}