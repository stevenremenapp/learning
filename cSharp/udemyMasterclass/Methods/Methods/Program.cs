using System;

namespace Methods
{
    class Program
    {
        static void Main(string[] args)
        {
            WriteSomething();
            WriteSomethingSpecific("Steve", 31);
            Console.WriteLine(Add(Add(2, 3), Add(2, 3)));
            Console.WriteLine(Divide(25, 13));
            GreetFriend(friends);
            Console.Read();
        }
        public static void WriteSomething()
        {
            Console.WriteLine("I am called from a method.");
        }
        public static void WriteSomethingSpecific(string name, int age)
        {
            Console.WriteLine($"My name is {name} and I am {age} years old.");
        }

        public static int Add(int num1, int num2)
        {
            return num1 + num2;
        }

        // Using int for the parameters will cause 1 to be returned
        public static double Divide(double num1, double num2)
        {
            return num1 / num2;
        }

        static string[] friends = new string[]
        {
            "Dave", "Kayla", "Tyler"
        };
        public static void GreetFriend(string[] friends)
        {
            for (int i = 0; i < friends.Length; i++)
            {
                Console.WriteLine($"Hello {friends[i]}, my friend.");
            }
        }
    }
}
