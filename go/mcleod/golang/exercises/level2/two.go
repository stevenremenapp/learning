package main

import (
	"fmt"
)

func main() {
	g := (10 == 10.00)
	h := (10 <= 10.00)
	i := (10 >= 11)
	j := (10 != 9)
	k := (10 < 100)
	l := (10 > 100)
	fmt.Printf("%t, %t, %t, %t, %t, %t\n", g, h, i, j, k, l)
	fmt.Println(g, h, i, j, k, l)
}
