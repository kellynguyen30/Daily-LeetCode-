function longestPalindrome(s) {
  let res = ""; // khởi tạo chuỗi rỗng để lưu chuỗi con đối xứng dài nhất
  let resLen = 0; // khởi tạo độ dài bằng = 0

  // lặp qua từng kí tự trong chuỗi
  for (let i = 0; i < s.length; i++) {
    // odd (lẻ) length palindromes
    let l = i,
      r = i;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > resLen) {
        res = s.substring(l, r + 1);
        resLen = r - l + 1;
      }
      l -= 1;  
      r += 1;
    }

    // even length palindromes
    l = i;
    r = i + 1;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > resLen) {
        res = s.substring(l, r + 1);
        resLen = r - l + 1;
      }
      l -= 1;
      r += 1;
    }
  }
  return res;
}


// Giai thich code
/**
 * Ví dụ 1: s = "babad"
            s.length = 5 => for: i -> 4
            res = ""
            reslen = 0
     WHILE  (l >=0 && r < 5 && s[l] === s[r])

***i = 0 (ký tự 'b'):

 + Độ dài lẻ:
  l = r = 0 = 'b' =>  ĐỐI XỨNG

  (1> 0: dài hơn chuỗi con hiện tại) 
         => res (0, 1)  -> chuỗi con 'b' ( đối xứng, độ dài = 1)
         => reslen = 1 

  => l-- = -1, r++ = 1 => l NGOÀI CHUỖI, THOÁT 

 + Độ dài chẵn:
  l = 0, r = 1 -> 'b' != 'a' => KHÔNG ĐỐI XỨNG

***i = 1 (ký tự 'a')

 + Độ dài lẻ:
  l =  r = 1 = 'a': ĐỐI XỨNG 

  (1=1: KHÔNG DÀI HƠN CHUỖI HIỆN TẠI) 
          => res không cập nhập

  => l-- = 0, r++ = 2 = 'b' : ĐỐI XỨNG

  (3 >1: dài hơn chuỗi con hiện tại )
        => res(0,3) = 'bab' -> chuỗi con bab' (đối xứng, độ dài = 3)
        => reslen = 3   
 
 + Độ dài chẵn:
  l = 1, r = 2 -> 'a' != 'b' => KHÔNG ĐỐI XỨNG, THOÁT

***i = 2 (ký tự 'b'):

 + Độ dài lẻ:
 l = r = 2 = 'b': ĐỐI XỨNG

 (1<3: KHÔNG DÀI HƠN CHUỖI CON HIỆN TẠI)
      => res không cập nhập

  => l-- = 1; r++ = 3  =  'a' : ĐỐI XỨNG
  (3 = 3: KHÔNG DÀI HƠN CHUỖI CON HIỆN TẠI)
      => res không cập nhập

  => l-- = 0, r++ = 4 -> 'b' != 'd' => KHÔNG ĐỐI XỨNG, THOÁT

  + Độ dài chẵn:
  l = 2, r = 3 -> 'b' != 'a'=> KHÔNG ĐỐI XỨNG, THOÁT

***i = 3 (ký tự 'a'):

  + Độ dài lẻ:
  l = r = 3 = 'a' : ĐỐI XỨNG

  (1 < 3:KHÔNG DÀI HƠN CHUỖI CON HIỆN TẠI )
      => res không cập nhập

  => l-- = 2, r++ = 4 -> 'b' != 'd' => KHÔNG ĐỐI XỨNG, THOÁT

  + Độ dài chẵn:
  l = 3. r = 4 -> 'a' != 'd' => KHÔNG ĐỐI XỨNG, THOÁT

**i = 4 ((ký tự 'd')

  + Độ dài lẻ:
  l = r = 4 = 'd' : ĐỐI XỨNG

  (1 < 3 :KHÔNG DÀI HƠN CHUỖI CON HIỆN TẠI )
     => res không cập nhập

  => l-- = 3, r++ = 5 => r NGOÀI CHUỖI, THOÁT 

  + Độ dài chẵn:
  l = 4, r = 5 => r NGOÀI CHUỖI, THOÁT 

  => RETURN RES = 'bab' 

/**
 */
