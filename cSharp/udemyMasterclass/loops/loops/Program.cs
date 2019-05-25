using System;

namespace loops
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
            // FOR LOOPS
            for (int i = 0; i < 50; i+=5)
            {
                Console.WriteLine($"This is line {i}");
            }
            Console.WriteLine("End of for loop");

            // To print odd numbers could just increment by 2
            for (int i = 0; i < 20; i++)
            {
                if (i % 2 != 0)
                {
                    Console.WriteLine($"{i}");
                }
            }
            Console.WriteLine("End of odd number loop");
            */

            // DO WHILE LOOPS
            /*
            // int counter = 15;
            int lengthOfText = 0;
            string wholeText = "";
            do
            {
                //Console.WriteLine(counter);
                Console.WriteLine("Please enter the name of a friend.");
                string nameOfFriend = Console.ReadLine();
                int currentLength = nameOfFriend.Length;
                lengthOfText += currentLength;
                wholeText += nameOfFriend;
            } while (lengthOfText < 20);
            Console.WriteLine($"Thanks, that was enough. Here are your friends: {wholeText}");
            */

            // WHILE LOOPS
            /*
            int counter = 0;
            while (counter < 10)
            {
                Console.WriteLine(counter);
                counter++;
            }

            int count = 0;
            bool exit = false;
            Console.WriteLine("Press enter to increase your counter. Enter anything else to end your counter.");
            while (exit == false)
            {
                string entry = Console.ReadLine();
                if (entry == "")
                {
                    count += 1;
                    Console.WriteLine($"Current count is {count}.");
                }
                else
                {
                    exit = true;
                }
            }
            Console.WriteLine($"Your final count is {count}.");
            */

            // BREAK AND CONTINUE
            /*
            for (int i = 0; i < 10; i++)
            {
                Console.WriteLine(i);

                if (i == 3)
                {
                    Console.WriteLine("At 3 we stop!");
                    break;
                }
                Console.WriteLine("We didn't break out!");
            }
            Console.WriteLine("We broke out!");

            for (int i = 0; i < 10; i++)
            {
                if (i % 2 == 0)
                {
                    Console.WriteLine("Here comes an odd number...");
                    continue;
                }
                Console.WriteLine(i);
            }
            */

            // LOOPS AVERAGE CHALLENGE
            bool computeAverage = false;
            decimal totalScore = 0;
            int totalEntries = 0;

            Console.WriteLine("Welcome! This program will average your students' scores. Please type each student's score and press enter. Type -1 and press enter to get the class average.");
            while (computeAverage == false)
            {
                decimal scoreEntered;
                if (decimal.TryParse(Console.ReadLine(), out scoreEntered))
                {
                    if (scoreEntered == -1)
                    {
                        computeAverage = true;
                        Console.WriteLine($"Your average class score is {Math.Round((totalScore / totalEntries), 2)} and your total number of scores entered is {totalEntries}.");
                        continue;
                    }

                    if (scoreEntered < 0 || scoreEntered > 110)
                    {
                        Console.WriteLine("The score entered is less than 0 or greater than 110. Please enter another number.");
                        continue;
                    }

                    totalScore += scoreEntered;
                    totalEntries += 1;
                }
                else
                {
                    Console.WriteLine("You did not enter a number. Please try again.");
                }
                
                Console.WriteLine($"You entered a score of {scoreEntered}. Total Combined Score: {Math.Round(totalScore, 2)} & Total Entries: {totalEntries}");
            }
        }
    }
}
