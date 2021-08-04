function palindrome(str) {
    const string = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let reverse = '';
  
    for (var i = string.length - 1; i >= 0; i--) {
        reverse += string[i];
    }
  
    if (string === reverse) {
        return true;
    } else {
        return false;
    }
}
palindrome("race car*");