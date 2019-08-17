// MAP, FILTER, AND REDUCE ARE HIGHER ORDER FUNCTIONS / OFTEN USED IN HIGHER ORDER FUNCTIONS!!!

// take a generic multiplyBy function and allow it to multiply by set amounts using higher order functions

const multiplyBy = (int, multiple) => {
    return int * multiple();
}

const multiplyByTwo = () => {
    return 2;
}

const multiplyByTen = () => {
    return 10;
}

multiplyBy(2, multiplyByTwo);
multiplyBy(2, multiplyByTen);

/////// Andrei's solution

const multiplyBy = (num1) => {
    return (num2) => {
        return num1 * num2;
    }
}

const multiplyByTwo = multiplyBy(2);
const multiplyByTen = multiplyBy(10);

multiplyByTwo(4);
multiplyByTen(4);