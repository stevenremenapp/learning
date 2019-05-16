using System;

namespace helloWorld
{
    class Program
    {
        static sbyte number = 15;
        static void Main(string[] args)
        {
            number = 20;
            Console.ForegroundColor = ConsoleColor.Cyan;
            Console.BackgroundColor = ConsoleColor.DarkYellow;
            Console.Clear();
            Console.WriteLine(number);
            Console.WriteLine("hello world");
            Console.WriteLine("Hello Steve");
            Console.Read();
        }
    }
}
