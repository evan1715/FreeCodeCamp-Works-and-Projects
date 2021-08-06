function rot13(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let decoded = '';
  
    for (var i = 0; i < str.length; i++) {
        const currentChar = str.charAt(i).match(/[A-Z]/) && alphabet.indexOf(str.charAt(i)) + 13;
        const index = currentChar >= 26 ? currentChar - 26 : currentChar;
        
        if (index || index === 0) {
            decoded += alphabet.charAt(index);
        } else {
            decoded += str.charAt(i);
        }
    }
    console.log(decoded);
    return decoded;
}
rot13("SERR PBQR PNZC");