using System;

namespace IfStatementChallenge
{
    class Program
    {
        static void Main(string[] args)
        {
            StartLogin();
        }

        public static void StartLogin()
        {
            Console.WriteLine("Do you have an account? Enter Y or N");
            string userResponse = Console.ReadLine();

            if (userResponse.ToLower() == "y" || userResponse.ToLower() == "n")
            {
                loginRouting(checkForAccount(userResponse.ToLower()));
            }

            while (userResponse.ToLower() != "y" && userResponse.ToLower() != "n")
            {
                Console.WriteLine("Please enter Y or N.");
                userResponse = Console.ReadLine();
                if (userResponse.ToLower() == "y" || userResponse.ToLower() == "n")
                {
                    loginRouting(checkForAccount(userResponse.ToLower()));
                }
            }
        }

        public static bool checkForAccount(string userResponse)
        {
            if (userResponse == "y")
            {
                return true;
            } else
            {
                return false;
            }
        }

        public static void loginRouting(bool isRegistered)
        {
            if (isRegistered)
            {
                Console.WriteLine("Please enter your username.");
                string userName = Console.ReadLine();
                Console.WriteLine("Please enter your password.");
                string password = Console.ReadLine();
                Console.WriteLine("You are now logged in!");
            } else
            {
                var registeredId = RegisterUser();
                // Console.WriteLine($"found {registeredId.username} and {registeredId.password}");
                Console.WriteLine("You are now registered! Please login by entering your username.");
                string userNameEntered = Console.ReadLine();
                LoginUser(registeredId.username, userNameEntered, registeredId.password);
            }
        }

        public static (string username, string password) RegisterUser()
        {
            Console.WriteLine("Please register for an account. Enter your username.");
            string userName = Console.ReadLine();
            Console.WriteLine("Please enter your password.");
            string password = Console.ReadLine();
            return (userName, password);
        }

        public static void LoginUser(string registeredUsername, string userNameEntered, string registeredPassword)
        {
            if (registeredUsername == userNameEntered)
            {
                checkPassword(registeredPassword);
            }
            else
            {
                while (registeredUsername != userNameEntered)
                {
                    Console.WriteLine("I'm sorry, we don't have a user by that name. Enter your username again. Enter restart to start over.");
                    userNameEntered = Console.ReadLine();
                    
                    // var escToRestart = Console.ReadKey().Key;
                    /*
                    if (escToRestart == ConsoleKey.Escape)
                    {
                        StartLogin();
                    }
                    */

                    if (userNameEntered.ToLower() == "restart")
                    {
                        userNameEntered = null;
                        StartLogin();
                    }
                }
                Console.WriteLine("Username found. Please enter your password.");
                checkPassword(registeredPassword);
            }
        }

        public static void checkPassword(string registeredPassword)
        {
            Console.WriteLine("Please enter your password.");
            string passwordEntered = Console.ReadLine();
            if (registeredPassword == passwordEntered)
            {
                Console.WriteLine("You are now logged in!");
            }
            else
            {
                while (registeredPassword != passwordEntered)
                {
                    Console.WriteLine("That password is incorrect. Please try again. Enter restart to start over.");
                    passwordEntered = Console.ReadLine();

                    if (passwordEntered.ToLower() == "restart")
                    {
                        passwordEntered = null;
                        StartLogin();
                    }
                }
                Console.WriteLine("You are now logged in!");
            }
        }
    }
}
