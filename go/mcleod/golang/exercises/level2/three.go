package main

import (
	"fmt"
)

const (
	a     = 19
	b int = 84
)

func main() {
	const h string = "hello"
	const w = "world"
	fmt.Println(h, w)
	fmt.Println(a, b)
}
