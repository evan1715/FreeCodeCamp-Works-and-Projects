function checkCashRegister(price, cash, cid) {
    let difference = cash - price;
    let cidSum = 0, changeSum = 0;
    let change = [], changeArray = [];
    const valueOf = [
        ['PENNY', 0.01], //penny 0
        ['NICKEL', 0.05], //nickel 1
        ['DIME', 0.10], //dime 2
        ['QUARTER', 0.25], //quarter 3
        ['ONE', 1], //one 4
        ['FIVE', 5], //five 5
        ['TEN', 10], //ten 6
        ['TWENTY', 20], //twenty 7
        ['ONE HUNDRED', 100] //hundred 8
    ];
    let amountOf = [
        cid[0][1] / 0.01, //pennies 0
        cid[1][1] / 0.05, //nickels 1
        cid[2][1] / 0.10, //dimes 2
        cid[3][1] / 0.25, //quarters 3
        cid[4][1] / 1, //ones 4
        cid[5][1] / 5, //fives 5
        cid[6][1] / 10, //tens 6
        cid[7][1] / 20, //twenties 7
        cid[8][1] / 100 //hundreds 8
    ];
  
    //Figure out the change needed
    let p = amountOf.length;
    while (p >= 0) {
        while (amountOf[p] > 0) {
            if (difference - valueOf[p][1] > -0.01) {
                changeArray.push(valueOf[p]);
                difference -= valueOf[p][1];
                difference = difference.toFixed(2);
            }
            amountOf[p]--;
        }
        p--;
    }
  
    //Total amount per currency unit
    for (var k = amountOf.length - 1; k >= 0; k--) {
        const howMany = changeArray.filter(unit => unit.includes(valueOf[k][0])).length;
  
        if (howMany) {
            change.push(valueOf[k]);
            change[change.indexOf(valueOf[k])][1] *= howMany;
        } 
    }
  
    //Total sum in register
    for (var i = 0; i < cid.length; i++) {
        if (change[i]) {
            changeSum += change[i][1];
        }
        cidSum += cid[i][1];
    }
  
    //Ensure we're only using two decimal places for money
    cidSum = cidSum.toFixed(2);
    changeSum = changeSum.toFixed(2);
  
    //Return conditions
    if (changeSum != cash - price) {
        return { status: 'INSUFFICIENT_FUNDS', change: [] }
    } else if (changeSum == cidSum) {
        return { status: 'CLOSED', change: cid }
    } else {
        return { status: 'OPEN', change: change }
    }
  }
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);