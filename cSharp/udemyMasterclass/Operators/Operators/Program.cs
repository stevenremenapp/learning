using System;

namespace Operators
{
    class Program
    {
        static void Main(string[] args)
        {
            int num1 = 5;
            int num2 = 3;
            int num3;

            // unary operator
            num3 = -num1;
            Console.WriteLine($"num3 is {num3}.");

            bool isSunny = false;
            Console.WriteLine("Is it sunny? {0}", !isSunny);

            // Increment operators
            int num = 0;
            num++;
            Console.WriteLine(num);
            num += 3;
            Console.WriteLine(num);
            // post-increment
            Console.WriteLine("num is {0}", num++);
            // pre-increment
            Console.WriteLine("num is {0}", ++num);
            Console.WriteLine("num is {0}", --num);

            // relational operators
            bool isLower;
            isLower = num1 > num2;
            Console.WriteLine($"Is num1 greater than num2? {isLower}");


            // equality operator == and !=
            bool isEqual;
            isEqual = num1 == num2;
            Console.WriteLine(isEqual);

            isEqual = num1 != num2;
            Console.WriteLine(isEqual);

            // Conditional Operators && ||
            bool isLowerAndIsSunny;
            isLowerAndIsSunny = isLower && isSunny;
            isLowerAndIsSunny = isLower || isSunny;
            Console.WriteLine($"isLower or isSunny? {isLowerAndIsSunny}");
        }
    }
}
