using System;

namespace IfStatementChallenge
{
    class Program
    {
        static void Main(string[] args)
        {
            // Restart flag
            bool loginFinished = false;

            while (loginFinished == false)
            {
                // Ask for account
                Console.WriteLine("Do you have an account? Enter Y or N");
                string userHasAccount = Console.ReadLine();

                if (userHasAccount.ToLower() == "y")
                {
                    Console.WriteLine("Please enter your username.");
                    string userName = Console.ReadLine();
                    Console.WriteLine("Please enter your password.");
                    string password = Console.ReadLine();
                    Console.WriteLine("You are now logged in!");
                    loginFinished = true;
                }

                if (userHasAccount.ToLower() == "n")
                {
                    // Register user
                    Console.WriteLine("Please register for an account. Register your username.");
                    string registeredUsername = Console.ReadLine();
                    Console.WriteLine("Please register your password.");
                    string registeredPassword = Console.ReadLine();

                    // Login new user
                    Console.WriteLine("Thanks for registering! Please enter your username to login.");
                    string enteredUsername = Console.ReadLine();

                    while (registeredUsername != enteredUsername && enteredUsername != "restart")
                    {
                        Console.WriteLine("I'm sorry, we don't have a user by that name. Enter your username again. Enter restart to start over.");
                        enteredUsername = Console.ReadLine();
                    }
                    if (enteredUsername.ToLower() == "restart")
                    {
                        continue;
                    }
                    Console.WriteLine("Username found. Please enter your password.");
                    string enteredPassword = Console.ReadLine();

                    while (registeredPassword != enteredPassword && enteredPassword != "restart")
                    {
                        Console.WriteLine("That password is incorrect. Please try again. Enter restart to start over.");
                        enteredPassword = Console.ReadLine();
                    }
                    if (enteredPassword.ToLower() == "restart")
                    {
                        continue;
                    }
                    Console.WriteLine("You are now logged in!");
                    loginFinished = true;
                }
            }            
        }
    }
}
