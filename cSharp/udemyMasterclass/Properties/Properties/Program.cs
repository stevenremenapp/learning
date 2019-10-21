using System;

namespace Properties
{
    class Box
    {
        // Constructor
        public Box(int length, int height, int width)
        {
            this.length = length;
            this.Width = width;
            this.height = height;
        }

        // member variables
        private int length;
        private int height;
        // private int width;
        private int volume;

        // CAN MAKE PROPERTIES READ OR WRITE ONLY IF GET OR SET IS ONLY SET

        // Long way to use getter and setter with Property
        /*
        public int Length
        {
            get
            {
                return length;
            }
            set
            {
                length = value;
            }
        }
        */
        
        // Using => Operator to get and set
        public int Length
        {
            get => length;
            set => length = value;
        }

        // Short way to write get/set -- type Prop and tab twice
        // Auto-implemented property
        public int Width { get; set; }

        public int Height {
            get
            {
                return height;
            }
            set
            {
                if (value < 0)
                {
                    // throw new Exception("Size should be positive.");
                    value = -value;
                }
                height = value;
            }
        }

        public int Volume
        {
            get
            {
                return Width * Length * Height;
            }
        }

        // make vars private and set with method
        // can also make a getLength method
        /*
        public void SetLength(int length)
        {
            this.length = length;
        }
        */

        // CHALLENGE
        // CREATE A READONLY PROPERTY THAT CALCULATES "FRONTSURFACE" BASED ON HEIGHT AND LENGTH
        public int FrontSurface { get => Height * Length; }

        public void DisplayInfo()
        {
            Console.WriteLine($"Length is {length} and height is {height} and width is {Width}, so the volume is {Volume}.");
            Console.WriteLine($"Oh yeah... my Front Surface is {FrontSurface}");
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            /*
            Box box = new Box();
            // box.length = 5;
            // Set length with setter method
            // box.SetLength(5);

            // Set length with setter property
            box.Length = 5;
            //box.height = 3;
            //box.width = 4;

            box.Width = 4;
            box.Height = -3;

            box.DisplayInfo();
            */

            Box box2 = new Box(5, 3, 4);
            box2.DisplayInfo();
        }
    }
}
