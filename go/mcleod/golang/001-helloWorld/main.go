package main

import (
	"fmt"
)

var a int

type hotdog int

var b hotdog

func main() {
	// fmt.Println("Hello, this is GO!")
	// foo()
	// fmt.Println("something more")
	// for i := 0; i < 100; i++ {
	// 	if i%2 == 0 {
	// 		fmt.Println(i)
	// 	}
	// }

	a = 42
	b = 43
	fmt.Println(a)
	fmt.Printf("%T\n", a)
	fmt.Println(b)
	fmt.Printf("%T\n", b)
	// can't coerce vars to be a different type than assigned, without conversion
	// a = b

	//conversion
	a = int(b)
	fmt.Println(a)
	fmt.Printf("%T\n", a)
}

// func foo() {
// 	fmt.Println("I'm in foo")
// }
