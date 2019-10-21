package main

import (
	"fmt"
)

// const a = 42
// const b = 42.34
// const c = "James Bond"

// const (
// 	a = 42
// 	b = 42.34
// 	c = "James Bond"
// )

const (
	a int     = 42
	b float64 = 42.34
	c string  = "James Bond"
)

func main() {
	fmt.Println(a)
	fmt.Println(b)
	fmt.Println(c)
	fmt.Printf("%T\n", a)
	fmt.Printf("%T\n", b)
	fmt.Printf("%T\n", c)
}
