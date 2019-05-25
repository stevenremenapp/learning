using System;

namespace classesBasics
{
    class Program
    {
        static void Main(string[] args)
        {
            // --- Create an object of my class -- an instance of a class
            // Human steve = new Human();

            // --- Introduce public variable from outside, and even change it
            // steve.firstName = "Steve";
            // steve.ChangeName("Steve", "Remenapp");

            // --- Call method of the class
            // steve.IntroduceMyself();

            // Human elissa = new Human();
            // michael.firstName = "Mikhail";
            // elissa.ChangeName("Elissa", "Zimmer");
            // michael.IntroduceMyself();
            // elissa.IntroduceMyself();

            // --- Call parameterized constructor of Human class
            Human steve = new Human("Steve", "Remenapp", "blue", 31.6);
            steve.IntroduceMyself();

            Human baby = new Human("Baby", "Babyson", "new", 1);
            baby.IntroduceMyself();

            Human truman = new Human("Truman", "Zimmer", "yellow");
            truman.IntroduceMyself();

            Human test = new Human("Test", "McTesterson");
            test.IntroduceMyself();

            Human prince = new Human("Prince");
            prince.IntroduceMyself();

            // --- Call default constructor of Human class
            Human basicHuman = new Human();
        }
    }
}
