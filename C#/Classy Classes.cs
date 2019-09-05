// https://www.codewars.com/kata/classy-classes/train/csharp
public class Person
{  
  public string Name;
  public int Age;
  public string Info;
  
  public Person(string name, int age)
  {
    Name= name;
    Age = age;
    Info = name + "s age is " + age;
  }
}