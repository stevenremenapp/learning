using System;

namespace TryCatch
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Please enter a number.");
            string userInput = Console.ReadLine();
            // Deal with incorrect input
            try
            {
                int userInputInt = int.Parse(userInput);
            }
            catch (FormatException)
            {
                Console.WriteLine("Format exception - Numbers only, please no letters.");
            }
            catch (OverflowException)
            {
                Console.WriteLine("Overflow Exception - The number was too large for Int 32");
            }
            catch (ArgumentNullException)
            {
                Console.WriteLine("Argument Null Exception - Please enter some text");
            }
            catch (Exception)
            {
                Console.WriteLine("General Excpetion");
            }
            finally
            {
                Console.WriteLine("This is called anyways.");
            }

            Console.Read();
        }
    }
}
