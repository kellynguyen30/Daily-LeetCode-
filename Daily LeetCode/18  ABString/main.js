// 18. ABString


function solution(S) 
{
  let foundB = false; // Biến theo dõi khi nào gặp 'b'
  
  for (let char of S) 
    {
      if (char === 'b') 
        {
          foundB = true; // Đã gặp ký tự 'b'
        } 
      else if (foundB && char === 'a') 
        {
          // Trường hợp có 'a' xuất hiện sau khi đã gặp 'b' -> false
          return false;
        }
    }
  
  // Nếu không có vấn đề gì -> true
  return true;
}

// Ví dụ kiểm tra
console.log(solution("aabbb")); // true
console.log(solution("ba")); // false
console.log(solution("aaa")); // true
console.log(solution("b")); // true
console.log(solution("abba")); // false

/** GIẢI THÍCH LUỒNG ĐI 
 * CHỈ KHI NÀO GẶP ĐIỀU KIỆN DỪNG b ĐỨNG TRƯỚC a -> RETURN FALSE
 * NGƯỢC LẠI HẾT CHUỖI MÀ VẪN KHÔNG GẶP ĐIỀU KIỆN DỪNG ĐÓ ->  RETURN TRUE 
 */

/** VÍ DỤ S = "aabbb"
 *  foundB = false = CHƯA TÌM THẤY b 
 *  - Kí tự 1: a -> không thuộc điều kiện nào, không thực thi hành động, tiếp tục vòng lặp 
 *               ->  foundB = false 
 *  - Kí tự 2: a -> không thuộc điều kiện nào, không thực thi hành động, tiếp tục vòng lặp 
 *               ->  foundB = false 
 *  - Kí tự 3: b -> thỏa char === 'b'
 *               -> foundB =  true = TÌM THẤY b
 *  - Kí tự 4: b -> thỏa char === 'b'
 *               -> foundB =  true = TÌM THẤY b
 *  - Kí tự 5: b -> thỏa char === 'b'
 *               -> foundB =  true = TÌM THẤY b
 * 
 * KẾT THÚC VÒNG LẶP, KHÔNG GẶP ĐIỀU KIỆN foundB && char === 'a' (không gặp b trước a)
 * => RETURN TRUE
 */

/** VÍ DỤ S = "abba"
 *  foundB = false = CHƯA TÌM THẤY b 
 *  - Kí tự 1: a -> không thuộc điều kiện nào, không thực thi hành động, tiếp tục vòng lặp 
 *               ->  foundB = false 
 *  - Kí tự 2: b -> thỏa char === 'b'
 *               -> foundB =  true = TÌM THẤY b
 *  - Kí tự 3: b -> thỏa char === 'b'
 *               -> foundB =  true = TÌM THẤY b
 *  - Kí tự 4: a -> thỏa foundB && char === 'a' => RETURN FALSE 
 */

/** VÍ DỤ S = "aaa"
 *  foundB = false = CHƯA TÌM THẤY b 
 *  - Kí tự 1: a -> không thuộc điều kiện nào, không thực thi hành động, tiếp tục vòng lặp 
 *               ->  foundB = false 
 *  - Kí tự 2: a -> không thuộc điều kiện nào, không thực thi hành động, tiếp tục vòng lặp 
 *               ->  foundB = false 
 *  - Kí tự 3: a -> không thuộc điều kiện nào, không thực thi hành động
 *               ->  foundB = false 
 * KẾT THÚC VÒNG LẶP, KHÔNG GẶP ĐIỀU KIỆN foundB && char === 'a' (không gặp b trước a)
 * => RETURN TRUE
 */