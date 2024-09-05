/**
 * @param {number[]} arr
 * @return {boolean}
 */
function validMountainArray(arr) {
  const n = arr.length;

  if (n < 3) {
    return false;
  }

  let currIndex = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i + 1] > arr[i]) {
      currIndex++;
    } else {
      break;
    }
  }

  if (currIndex === n - 1 || currIndex === 0) {
    return false;
  }
  for (currIndex; currIndex < n; currIndex++) {
    if (arr[currIndex] <= arr[currIndex + 1]) {
      return false;
    }
  }
  return true;
}
