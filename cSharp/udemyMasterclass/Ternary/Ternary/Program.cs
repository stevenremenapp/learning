using System;

namespace Ternary
{
    class Program
    {
        static void Main(string[] args)
        {
            int temp = 49;
            string stateOfMatter;

            if (temp < 32)
            {
                stateOfMatter = "solid";
            }
            else
            {
                stateOfMatter = "liquid";
            }

            Console.WriteLine($"The state of matter is {stateOfMatter}");

            // Ternary

            temp = 15;
            stateOfMatter = temp < 32 ? "solid" : "liquid";

            Console.WriteLine($"The state of matter is {stateOfMatter}");

            temp = 213;
            stateOfMatter = temp > 212 ? "gas" : temp < 32 ? "solid" : "liquid";

            Console.WriteLine($"The state of matter is {stateOfMatter}");

        }
    }
}
