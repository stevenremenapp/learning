using System;

namespace DecisionMaking
{
    class Program
    {
        static void Main(string[] args)
        {
            // If
            /*
            Console.WriteLine("What is the temperature today?");
            string temperature = Console.ReadLine();
            int numTemp = int.Parse(temperature);

            if (numTemp < 50)
            {
                Console.WriteLine("Take the coat.");
            }

            if (numTemp == 50)
            {
                Console.WriteLine("It is 50 degrees Fahrenheit.");
            }

            if (numTemp > 50 && numTemp < 70)
            {
                Console.WriteLine("It's alright.");
            }

            if (numTemp > 70)
            {
                Console.WriteLine("It is cozy & warm.");
            }
            */

            // If & Else, Try Parse
            Console.WriteLine("What is the temperature today?");
            string temperature = Console.ReadLine();
            //int numTemp = int.Parse(temperature);
            int numTemp;
            int number;
            bool userEnteredNumber = int.TryParse(temperature, out number);

            if (userEnteredNumber)
            {
                numTemp = number;
            }
            else
            {
                Console.WriteLine("You didn't enter a number, temp set to 0.");
                numTemp = 0;
            }

            if (numTemp < 50)
            {
                Console.WriteLine("Take the coat.");
            } else if (numTemp == 50)
            {
                Console.WriteLine("It is 50 degrees Fahrenheit.");
            } else if (numTemp > 50 && numTemp < 70)
            {
                Console.WriteLine("It's alright.");
            } else
            {
                Console.WriteLine("It is cozy & warm.");
            }

        }
    }
}
