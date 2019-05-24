using System;

namespace NestedIfStatements
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Please enter your user name.");
            bool isAdmin = false;
            bool isRegistered = true;
            string userName = Console.ReadLine();

            //if (isRegistered)
            if (isRegistered && userName != "" && userName.Equals("Admin"))
            {
                Console.WriteLine("Hello registered user!");
                //if (userName != "")
                //{
                    Console.WriteLine($"Hi there {userName}");
                    //if (userName.Equals("Admin"))
                    //{
                        Console.WriteLine("Hello Admin!");
                    //}
                //}
            }

            if (isAdmin || isRegistered)
            {
                Console.WriteLine("You are logged in.");
            }
        }
    }
}
