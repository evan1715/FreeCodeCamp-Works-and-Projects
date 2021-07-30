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



//Sorted Union
function uniteUnique(...arrays) {
    //The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
    //https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/array/flat
    const arr4 = arrays.flat();
    let newArray = [];

    for (var i = 0; i < arr4.length; i++) {
        if (!newArray.includes(arr4[i]) && arr4[i]) {
            newArray.push(arr4[i]);
        }
    }

    return newArray;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);



//Convert HTML Entities
function convertHTML(str) {
    const values = { 
        '&': '&amp;', 
        '<': '&lt;', 
        '>': '&gt;',
        '"': '&quot;', 
        "'": '&apos;',
    }
    const value = str.replace(/[&<>"']/g, match => values[match]);

    return value;
}
convertHTML("Dolce & Gabbana");



//Sum All Odd Fibonacci Numbers
function sumFibs(num) {
    let fibNums = [1, 1];
    let oddNums = [];
    let sum = 0;
  
    //Get all Fibonacci sequence numbers.
    for (var i = 2; i < num; i++) {
        fibNums.push(fibNums[i - 1] + fibNums[i - 2]);
    }

    //Filter all numbers to odd only.
    for (var j = 0; j < fibNums.length; j++) {
        if ((fibNums[j] % 2) !== 0) {
        oddNums.push(fibNums[j]);
        }
    }

    //If the number is less than or equal to num, then add the sum.
    for (var k = 0; k < oddNums.length; k++) {
        if (oddNums[k] <= num) {
        sum += oddNums[k];
        }
    }

    //If there's only 1 in num, return 1.
    if (num === 1) {
        sum = 1;
    }

    return sum;
}
sumFibs(1000);