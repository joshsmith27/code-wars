// Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.
//
// Your task is to make 'Past' function which returns time converted to miliseconds.
//
// #####Example:
//
// Past(0, 1, 1) == 61000
// Note! h, m and s will be only Natural numbers! Waiting for translations and Feedback! Thanks!

using System;
public static class Clock
{
  public static int Past(int h, int m, int s)
  {
    return (h *60*60 + m *60+s)*1000;
  }
}
