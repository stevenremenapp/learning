using System;

namespace helloWorld
{
    class Program
    {
        //static sbyte number = 15;
        static void Main(string[] args)
        {
            //number = 20;
            //Console.ForegroundColor = ConsoleColor.Cyan;
            //Console.BackgroundColor = ConsoleColor.DarkYellow;
            //Console.Clear();
            //Console.WriteLine(number);
            //Console.WriteLine("hello world");
            //Console.WriteLine("Hello Steve");
            //Console.Read();

            //int num1 = 13;
            //int num2 = 27;
            //int sum = num1 + num2;

            //double d1 = 3.5;
            //double d2 = 1.337;
            //double sumD = d1 + d2;

            //float f1 = 3.5f;

            //Console.WriteLine(num1);
            //Console.WriteLine($"The sum of {num1} plus {num2} equals {sum}.");
            //Console.WriteLine($"The sum of {d1} plus {d2} equals {sumD}.");
            //Console.Read();

            //string myName = "Steve";
            //string message = $"{myName} is my name.";
            //string shouting = message.ToUpper();

            //Console.WriteLine(message);
            //Console.WriteLine($"A little bit louder now: {shouting}");
            //Console.Read();

            //double myDouble = 13.97;
            //int myInt;

            // explicit conversion
            // cast double into int
            //myInt = (int)myDouble;
            //Console.WriteLine(myInt);
            //Console.Read();

            // implicit coneversion - fine because these values can fit into the larger newly decalred variable types
            //int num = 1233453;
            //long bigNum = num;

            //float myFloat = 13.37f;
            //double myNewDouble = myFloat;

            // tyoe conversion
            //string myString = myDouble.ToString();
            //Console.WriteLine(myString);
            //Console.Read();

            /*bool sunIsShining = false;
            string myBoolString = sunIsShining.ToString();
            Console.WriteLine(myBoolString);
            Console.Read();*/

            // string to integer

            string myString = "15";
            string mySecondString = "13";
            int num1 = Int32.Parse(myString);
            int num2 = Int32.Parse(mySecondString);
            int resultInt = num1 + num2;
            string result = myString + mySecondString;
            Console.WriteLine(resultInt);
            Console.Read();
        }
    }
}
