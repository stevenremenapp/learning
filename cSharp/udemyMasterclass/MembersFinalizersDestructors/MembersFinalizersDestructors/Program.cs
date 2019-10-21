using System;
using System.Diagnostics;

namespace MembersFinalizersDestructors
{
    class Members
    {
        // member - private field
        private string memberName;
        private string jobTitle;
        private int salary = 20000;

        // member - public field
        public int age;

        // member - property - exposes jobTitle safely
        public string JobTitle {
            get
            {
                return jobTitle;
            }
            set
            {
                jobTitle = value;
            }
        }

        // public member method
        public void Introducing(bool isFriend)
        {
            if (isFriend)
            {
                SharingPrivateInfo();
            }
            else
            {
                Console.WriteLine($"Hi, my name is {memberName}, I'm {age} years old, and my job title is {jobTitle}.");
            }
        }

        private void SharingPrivateInfo()
        {
            Console.WriteLine($"My salary is {salary}.");
        }

        // member constructor
        public Members()
        {
            age = 31;
            memberName = "Steve";
            salary = 30000;
            jobTitle = "software development intern";
            Console.WriteLine("Object created.");
        }

        // member - finalizer - destructor
        // only one destructor per class
        // finalizer cannot be overloaded
        // Whenever the object runs out of scope this is called
        ~Members()
        {
            // cleanup statements
            Console.WriteLine("Deconstruction of Members object.");
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            Members member1 = new Members();
            member1.Introducing(true);
            Debug.Write("Destruction of Members object!");
        }
    }
}
