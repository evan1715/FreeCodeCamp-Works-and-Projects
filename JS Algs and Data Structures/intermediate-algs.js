//Wherefore art thou
function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
    arr = collection.filter(select => 
        Object.keys(source).every(item => 
            source[item] === select[item]
        )
    );
    // Only change code above this line
    return arr;
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });



//Spinal Tap Case
function spinalCase(str) {
    //To search or extract a pattern more than once, you can use the g flag.
    //To ignore letter casing, use the i flag.
    // let cake = str.toLowerCase();
    // (/\s/g).test(cake); //returns true or false
    // cake.match(/\s/g);

    //icing will place spaces before words with a capital letter.
    //The () create capturing groups and we use $1 $2 to access them.
    let icing = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    str = icing.replace((/\s|_/g), '-').toLowerCase();

    return str;
}
spinalCase('This Is Spinal Tap');



//Pig Latin
function translatePigLatin(str) {
    const consonants = str.match(/^[^aeiou]+/);

    if (consonants) {
      return str.concat(consonants + 'ay').replace(consonants, '');
    } else if (str.match(/^[aeiou]/)) {
      return str.concat('way')
    }
}
translatePigLatin("consonant");



//Search and Replace
function myReplace(str, before, after) {
    let newAfter = after;
  
    if ((/^[A-Z]/).test(before)) {
        const cake = after.charAt(0).toUpperCase();
        newAfter = after.replace(after.charAt(0), cake);
    } else if ((/^[a-z]/).test(before)) {
        const cake = after.charAt(0).toLowerCase();
        newAfter = after.replace(after.charAt(0), cake);
    }
  
    return str.replace(before, newAfter);
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");



//DNA Pairing
function pairElement(str) {
    let arr = [];

    str.split("").map(cake => {
        if (cake === 'A') {
            arr.push(['A', 'T']);
        }
        if (cake === 'T') {
            arr.push(['T', 'A']);
        }
        if (cake === 'C') {
            arr.push(['C', 'G']);
        }
        if (cake === 'G') {
            arr.push(['G', 'C']);
        }
    });

    return arr;
}
pairElement("GCG");
pairElement("ATCGA");



//Missing Letters
function fearNotLetter(str) {
    let arr = [];
    let letter = undefined;
  
    for (var i = 0; i < str.length; i++) {
      arr.push(str.charCodeAt(i));
    }
  
    for (var i = 0; i < str.length; i++) {
      if (arr[i]+1 < arr[i + 1]) {
        letter = String.fromCharCode(arr[i]+1);
      }
    }
  
    return letter;
}
fearNotLetter("abce");
