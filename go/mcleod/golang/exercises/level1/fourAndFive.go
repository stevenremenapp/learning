package main

import (
	"fmt"
)

// wrong
// type (
// 	gopher = int
// )

type gopher int

var x gopher
var y int

func main() {
	//4
	fmt.Println(x)
	fmt.Printf("%T\n", x)
	x = 42
	fmt.Println(x)

	//5
	y = int(x)
	fmt.Println(y)
	fmt.Printf("%T\n", y)
}
