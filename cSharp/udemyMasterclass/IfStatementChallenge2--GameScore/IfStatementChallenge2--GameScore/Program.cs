using System;

namespace IfStatementChallenge2__GameScore
{
    class Program
    {
        public static int highScore = 9999;
        public static string highScorePlayer = "Steve";
        public static void CheckHighScore(int score, string playerName)
        {
            if (score > highScore)
            {
                highScore = score;
                highScorePlayer = playerName;
                Console.WriteLine($"New high score is {score}!");
                Console.WriteLine($"New high score holder is {playerName}!");
            }
            else
            {
                Console.WriteLine($"Nice try, but the old high score of {highScore} could not be broken and is still held by {highScorePlayer}.");
            }
        }
        static void Main(string[] args)
        {
            int score;
            Console.WriteLine("Who is playing?");
            string playerName = Console.ReadLine();
            Console.WriteLine("What is your final score?");
            string currentScore = Console.ReadLine();
            if (Int32.TryParse(currentScore, out score))
            {
                CheckHighScore(score, playerName);                
            }
            else
            {
                Console.WriteLine("I'm sorry, you did not provide a number for your score. You lose!");
            }
        }
    }
}
