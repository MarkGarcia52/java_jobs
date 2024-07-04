/*
[
    [
        [1, 2], [3, 4], [5, 6]
        [7, 8], [9, 10], [11, 12]
    ]
]

*/
const matrix = [];


for (i = 0; i < 3; i++) {
    const numbers = [];

    for (v = 0; v < 2; v++) {
        const value = [];

            start = i * 2 + v * 6 + 1;
        for (j = start; j < start + 2; j++) {
            value.push(j);
        }

        numbers.push(value);
    }

    matrix.push(numbers);
}

console.log(matrix);