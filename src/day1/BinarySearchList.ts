export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;
    do {
        const midpoint = Math.floor(low + (high - low) / 2);
        const value = haystack[midpoint];
        if (value === needle) {
            return true;
        } else if (value > needle) {
            high = midpoint;
        } else {
            low = midpoint + 1;
        }
    } while (low < high);
    return false;
}

let result = bs_list([1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420], 69);
console.log(result);

/* 
- search(array, hi, lo)
- find the mid point
- so mid = [lo + (hi -lo)/2]
- value = array[m]
======================================
if value == needle
    return true
else if
    value > mid
    lo = mid + 1
else
    hi = mid
    return true
=======================================
- TnS complexity: log2(n) 
*/
