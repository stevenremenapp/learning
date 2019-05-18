using System;

namespace UserInput
{
    class Program
    {
        static void Main(string[] args)
        {
            AddInput();
            Console.Read();
        }

        static void AddInput()
        {
            Console.WriteLine("Please type a number and press enter.");
            string input1string = Console.ReadLine();
            double input1 = Double.Parse(input1string);
            Console.WriteLine(input1);
            Console.WriteLine("Please type another number and press enter.");
            string input2string = Console.ReadLine();
            double input2 = Double.Parse(input2string);
            Console.WriteLine(input2);
            double total = input1 + input2;
            Console.WriteLine($"Your total is {total}!");
        }
    }
}
