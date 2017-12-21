using System;

namespace args
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello " + args[0] + "!" + System.IO.File.ReadAllText("yo.txt"));
        }
    }
}
