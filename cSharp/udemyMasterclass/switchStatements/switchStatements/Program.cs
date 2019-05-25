using System;

namespace switchStatements
{
    class Program
    {
        static void Main(string[] args)
        {
            int age = 7;
            string username = "Elissa";

            switch (age)
            {
                case 15:
                    Console.WriteLine("Too young to party in the club.");
                    break;
                case 25:
                    Console.WriteLine("Good to go.");
                    break;
                case 31:
                    Console.WriteLine("That's my age!");
                    break;
                default:
                    Console.WriteLine("That's not any of the ages!");
                    break;
            }

            switch (username)
            {
                case "Steve":
                    Console.WriteLine("That's me!");
                    break;
                case "Elissa":
                    Console.WriteLine("That's my fiancee!");
                    break;
                case "Truman": case "Suman": case "Evie":
                    Console.WriteLine("That's one of my cats!");
                    break;
                default:
                    Console.WriteLine("You don't live with me");
                    break;
            }
        }
    }
}
