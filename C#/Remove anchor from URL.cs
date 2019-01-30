// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples:

// Kata.RemoveUrlAnchor("www.codewars.com#about") => "www.codewars.com"
// Kata.RemoveUrlAnchor("www.codewars.com?page=1") => "www.codewars.com?page=1"

public static class Kata
{
  public static string RemoveUrlAnchor(string url)
  {
    return url.Split('#')[0];
  }
}