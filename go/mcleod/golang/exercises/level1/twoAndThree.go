package main

import (
	"fmt"
)

var x int = 42
var y string = "James Bond"
var z bool = true

func main() {
	// the compiler assigns zero values to variables that do not have assigned values
	fmt.Printf("%v %v %v ", x, y, z)
	s := fmt.Sprintf("%v %v %v ", x, y, z)
	fmt.Println(s)
}
