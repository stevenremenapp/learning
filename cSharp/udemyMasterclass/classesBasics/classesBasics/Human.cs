using System;
using System.Collections.Generic;
using System.Text;

namespace classesBasics
{
    // This class is a blueprint for a datatype
    class Human
    {
        // Member variable
        // By making the variable public, you can use it outside of the class
        private string firstName;
        private string lastName;
        private string eyeColor;
        private double age;

        // Default Constructor
        public Human()
        {
            Console.WriteLine("Constructor called, object created.");
        }

        // Parameterized Constructors

        public Human(string firstName)
        {
            this.firstName = firstName;
        }

        public Human(string firstName, string lastName)
        {
            this.firstName = firstName;
            this.lastName = lastName;
        }

        public Human(string firstName, string lastName, string eyeColor)
        {
            this.firstName = firstName;
            this.lastName = lastName;
            this.eyeColor = eyeColor;
        }

        public Human(string firstName, string lastName, string eyeColor, double age)
        {
            this.firstName = firstName;
            this.lastName = lastName;
            this.eyeColor = eyeColor;
            this.age = age;
        }

        // Member method
        public void IntroduceMyself()
        {
            string greeting = $"Hi, I'm {firstName.ToUpper()}";

            if (lastName != null)
            {
                greeting += $" {lastName.ToUpper()}";
            }

            if (lastName == null)
            {
                greeting += $" and I don't have a last name";
            }

            if (eyeColor != null)
            {
                greeting += $"; I have {eyeColor} eyes";
            }

            if (eyeColor == null)
            {
                greeting += $"; I don't know the color of my eyes";
            }

            if (age != 0)
            {
                if (age <= 1)
                {
                    greeting += $" and I am {age} year old";
                }
                else
                {
                    greeting += $" and I am {age} years old";
                }
            }

            if (age == 0)
            {
                greeting += $" and I am ageless";
            }

            /*
            if (eyeColor == null)
            {
                Console.WriteLine($"Hi, I'm {firstName.ToUpper()} {lastName.ToUpper()} and I don't know the color of my eyes.");
            }
            if (age == 0)
            {
                Console.WriteLine($"Hi, I'm {firstName.ToUpper()} {lastName.ToUpper()} and I have {eyeColor} eyes.");
            }
            if (age != 0 && age <= 1)
            {
                Console.WriteLine($"Hi, I'm {firstName.ToUpper()} {lastName.ToUpper()}. I am {age} year old and I have {eyeColor} eyes.");
            }
            if (age != 0 && age > 1)
            {
                Console.WriteLine($"Hi, I'm {firstName.ToUpper()} {lastName.ToUpper()}. I am {age} years old and I have {eyeColor} eyes.");
            }
            */
            greeting += ".";
            Console.WriteLine(greeting);
            
        }

        public void ChangeName(string firstNameChange, string lastNameChange)
        {
            firstName = firstNameChange;
            lastName = lastNameChange;
        }
    }
}
