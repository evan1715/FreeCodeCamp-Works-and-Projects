function telephoneCheck(str) {
  let num = [];
  let dash = 0;
  let paran = 0;

  for (var i = 0; i < str.length; i++) {
    if (str[i] === '-') {
      dash++;
    }
    if (str[i] === '(' || str[i] === ')') {
      paran++;
    }
    if (str[i].match(/[0-9]/)) {
      num.push(str[i]);
    }
  }

  if (str.indexOf('(') !== -1 && str.indexOf(')') !== -1) {
    if (str.indexOf('(') + 4 !== str.indexOf(')')) {
      return false;
    }
  }

  if (num.length > 11 || num.length < 10 || str[0] === '-') {
    return false;
  } else if (num.length === 11 && num[0] != 1) {
    return false;
  } else if (dash > 2 || paran > 2 || paran === 1) {
    return false; 
  } else {
    console.log('true');
    return true;
  }
}
telephoneCheck("1 555-555-5555");