export const fibonacci: (value: number) => number = (value: number) => {
    if (value < 2) {
        return value;
    }
    return fibonacci(value - 1) + fibonacci(value - 2);
}

export const palindrome = (string: string) => {
    const reversedString = string.toLowerCase().split('').reverse().join('');
    return string === reversedString;
}

export const squareRoot = (number: number) => {
    let square = 1;
    let index = 0;
    while (true) {
        index = index + 1;
        square = (number / square + square) / 2
        if (index === number + 1) {
            break;
        }
    }
    return square % 1 === 0;
}