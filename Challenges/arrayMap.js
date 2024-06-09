/* Coding Challenge 1: Array Manipulation*/
//-----------------------------------------------------------------------------------

function findSubarrayWithTarget(arr, target) {
    let sum = 0;
    let start = 0;

    for (let end = 0; end < arr.length; end++) {
        sum += arr[end];

        while (sum > target) {
            sum -= arr[start];
            start++;
        }

        if (sum === target) {
            return true;
        }
    }

    return false;
}

const arr = [-1000000000, 1000000000, 0, -1000000000, 1000000000];
const target = 0;
const result = findSubarrayWithTarget(arr, target);
document.getElementById("result").textContent = `Output: ${result}`;





/*

Array Manipulation
Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target.
Constraints:
    - The array will contain between 1 and 100,000 elements.
    - The elements in the array and the target sum will be between -1,000,000,000 and 1,000,000,000.
Expected Time Complexity: O(n), where n is the length of the array.
Expected Space Complexity: O(1).

Output: true

*/