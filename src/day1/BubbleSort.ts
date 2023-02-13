export default function bubble_sort(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            // always minus one of the length because everytime we execute, the last index will always be the largest
            // and we shorten the array now
            // then we swap the position of the largest index
            if (arr[j] > arr[j + 1]) {
                // put the temp value as arr[j]
                const tmp = arr[j];
                // swap it by assign arr[j] to arr[j+1]
                arr[j] = arr[j + 1];
                // assign arr[j+1] to temp
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}

console.log({
    1: bubble_sort([3, 4, 7, 9, 1, 42, 69, 420]),
    2: bubble_sort([10, 9, 8, 7, 6, 5, 4, 3]),
});
