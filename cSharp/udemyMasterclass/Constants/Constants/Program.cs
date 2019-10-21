using System;

namespace Constants
{
    class Program
    {
        const double PI = 3.14159265359;
        const int weeks = 52, months = 12;
        const string birthday = "October 17, 1987";
        static void Main(string[] args)
        {
            Console.WriteLine($"My birthday is always going to be {birthday}.");
            Console.Read();
        }
    }
}
