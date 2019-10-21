using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Arrays
{
    class Program
    {
        static void Main(string[] args)
        {
            // ARRAYS
            /*
            int[] grades = new int[5];

            grades[0] = 97;
            grades[1] = 79;
            grades[2] = 85;
            grades[3] = 90;
            grades[4] = 88;

            Console.WriteLine($"Grade at index 0: {grades[0]}");

            string input = Console.ReadLine();
            grades[0] = int.Parse(input);
            Console.WriteLine($"Grade at index 0: {grades[0]}");

            int[] gradesOfMathStudents = { 35, 50, 68, 99, 89 };
            int[] gradesOfScienceStudents = new int[] { 48, 99, 87, 94, 79 };
            Console.WriteLine(gradesOfMathStudents);
            Console.WriteLine(gradesOfMathStudents.Length);
            Console.WriteLine(gradesOfScienceStudents);
            */

            // FOREACH LOOPS
            /*
            int[] nums = new int[10];

            for (int i = 0; i < nums.Length; i++)
            {
                nums[i] = i + 1;
            }

            for (int j = 0; j < nums.Length; j++)
            {
                Console.WriteLine($"Index {j} is {nums[j]}");
            }

            Console.WriteLine("");
            Console.WriteLine("Foreach loop:");
            int counter = 0;
            foreach(int k in nums)
            {
                Console.WriteLine($"Index {counter} is {nums[counter]}");
                counter++;
            }

            // Foreach challenge
            Console.WriteLine("");
            string[] friends = { "Dave", "Mike", "Kayla", "Alan", "Jenny" };
            foreach (string friend in friends)
            {
                Console.WriteLine($"Hello, {friend}!");
            }
            */

            // MULTIDIMENSIONAL ARRAYS
            string[,] twoD;
            int[,,] threeD;

            int[,] array2D = new int[,]
            {
                {1, 2, 3},
                {4, 5, 6},
                {7, 8, 9}
            };

            Console.WriteLine($"Central value is {array2D[1, 1]}");
            Console.WriteLine($"Last row, first column is {array2D[2, 0]}");

            string[,,] array3D = new string[,,]
            {
                {
                    {"hello", "there"},
                    {"hi", "again"},
                    {"what's", "up"}
                },
                {
                    {"what", "is"},
                    {"this", "sorcery"},
                    {"it", "continues!"}
                }
            };

            Console.WriteLine($"First value is {array3D[0, 0, 0]}");
            Console.WriteLine($"First value in the last array of the first array is {array3D[0, 2, 0]}");

            string[,] array2Dstring = new string[3, 2] 
            {
                { "one", "two" }, 
                { "three", "four" },
                { "five", "six" }
            };

            array2Dstring[1, 1] = "chicken";

            int dimensions = array2Dstring.Rank;
            Console.WriteLine($"Dimensions of the array2Dstring is {dimensions}.");

            Console.WriteLine(array2Dstring[1, 1]);

            int[,] array2D2 =
            {
                {1, 2},
                {3, 4}
            };

            int[,] numbers2D = new int[3, 2] { { 9, 99 }, { 3, 33 }, { 5, 55 } };
            // Or use the short form:
            // int[,] numbers2D = { { 9, 99 }, { 3, 33 }, { 5, 55 } };

            foreach (int i in numbers2D)
            {
                System.Console.Write("{0} ", i);
            }

            Console.WriteLine(Environment.NewLine);

            long[,] arr = new long[5, 4] { { 1, 2, 3, 4 }, { 1, 1, 1, 1 }, { 2, 2, 2, 2 }, { 3, 3, 3, 3 }, { 4, 4, 4, 4 } };

            int rowLength = arr.GetLength(0);
            int colLength = arr.GetLength(1);

            for (int i = 0; i < rowLength; i++)
            {
                Console.Write("  ");
                for (int j = 0; j < colLength; j++)
                {
                    Console.Write(arr[i, j]);
                    if (j != 3)
                    {
                        Console.Write("  |  ");
                    }                    
                }
                if (i != 4)
                {
                    Console.Write(Environment.NewLine + "----------------------" + Environment.NewLine);
                }
            }
            Console.Write(Environment.NewLine);
            Console.Write(Environment.NewLine);
        }
    }
}
