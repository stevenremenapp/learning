package main

import (
	"fmt"
)

// var x = 2

const (
	_ = iota
	// kb = 1024
	kb = 1 << (iota * 10)
	// mb = 1024 * kb
	mb = 1 << (iota * 10)
	// gb = 1024 * mb
	gb = 1 << (iota * 10)
)

func main() {
	// fmt.Printf("%d\t\t%b", x, x)
	// x := 4
	// fmt.Println("")
	// fmt.Printf("%d\t\t%b\n", x, x)

	// y := x << 1
	// fmt.Printf("%d\t\t%b", y, y)

	// kb := 1024
	// mb := 1024 * kb
	// gb := 1024 * mb

	fmt.Printf("%d\t\t\t%b\n", kb, kb)
	fmt.Printf("%d\t\t\t%b\n", mb, mb)
	fmt.Printf("%d\t\t\t%b\n", gb, gb)
}
