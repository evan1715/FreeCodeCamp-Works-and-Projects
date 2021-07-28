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