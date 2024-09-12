// 6. CreatePalindrome 
/**
 * - chuyển chuỗi S thành mảng cho dễ làm arr = S.split
 * 
 * - tạo 2 con trỏ đối xứng nhau:
 *  + left = arr[i], 
 *  + right = arr[n-i-1]
 * 
 * - chia đôi mảng (n/2 , Math.floor làm tròn xuống) , for chỉ cần duyệt 1 nửa mảng vì đã đối xứng
 *  + nếu left === "?" && right === "?" -> arr[i] = arr[n-i-1] = 'a' 
 *  + nếu left === "?"                  -> arr[i] = right 
 *  + nếu right === "?"                 -> arr[n-i-1] = left
 *  + nếu left !== right                -> "NO"
 * 
 * - kiểm tra độ dài lẻ, kiểm tra kí tự ở giữa mảng có "?" không -> nếu có thay bằng "a"
 */





function solution (S) 
{
  let n = S.length; 
  let arr = S.split("");

  for(let i = 0; i < Math.floor(n/2); i++)
  {
    let left = arr[i];
    let right = arr[n-i-1];

    if(left === "?" && right === "?") 
    {
      arr[i] = arr[n-i-1] = "a";
    }
    else if ( left === "?")
    {
      arr[i] = right;
    }
    else if (right === "?")
    {
      arr[n-i-1] = left;
    }
    else if (left !== right) 
    {
      return "NO";
    }
  }
  // độ dài lẻ    kí tự giữa mảng 
  if(n%2 !== 0 && arr[Math.floor(n/2)] === "?" )
  {
    arr[Math.floor(n/2)] = "a";
  }

  return arr.join(""); // kết hợp các phần tử của mảng thành 1 chuỗi, không có dầu phân cách
 
}


// test case 
console.log(solution("?ab??a")); // Output: "aabbaa"
console.log(solution("bab??a")); // Output: "NO"
console.log(solution("?a?"));    // Output: "aaa" hoặc "zaz"