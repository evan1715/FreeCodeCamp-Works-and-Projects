function convertToRoman(num) {
    let roman = '';
    let currentAmount = num;

    //M = 1000;
    if (currentAmount >= 1000) {
        let tick = 0;
        for (var i = 1; i <= currentAmount/1000; i++) {
            roman += 'M';
            tick++;
        }
        currentAmount -= tick*1000;
    }

    //CM = 900 - 999;
    if (currentAmount >= 900 && currentAmount < 1000) {
        roman += 'CM';
        currentAmount -= 900;
    }

    //D = 500;
    if (currentAmount/500 >= 1) {
        roman += 'D';
        currentAmount -= 500;
    }

    //C = 100;
    if (currentAmount < 400) {
        let tick = 0;
        for (var i = 1; i < currentAmount/100; i++) {
            roman += 'C';
            tick++;
        }
        currentAmount -= tick*100;
    }

    //CD = 400 - 499;
    if (currentAmount >= 400 && currentAmount < 500) {
        roman += 'CD';
        currentAmount -= 400;
    }

    //XC = 90-99;
    if (currentAmount >= 90 && currentAmount < 100) {
        roman += 'XC';
        currentAmount -= 90;
    }

    //L = 50;
    if (currentAmount >= 50) {
        roman += 'L';
        currentAmount -= 50;
    }

    //XL = 40-49;
    if (currentAmount >= 40 && currentAmount < 50) {
        roman += 'XL';
        currentAmount -= 40;
    }

    //X = 10;
    if (currentAmount >= 10) {
        let tick = 0;
        for (var i = 1; i < currentAmount/10; i++) {
            roman += 'X';
            tick++;
        }
        currentAmount -= tick*10;
    }

    //IX = 9;
    if (currentAmount === 9) {
        roman += 'IX';
        currentAmount -= 9;
    }

    //V = 5;
    if (currentAmount >= 5) {
        roman += 'V';
        currentAmount -= 5;
    }

    //IV = 4;
    if (currentAmount === 4) {
        roman += 'IV';
        currentAmount -= 4;
    }

    //I = 1;
    if (currentAmount <= 3) {
        for (var i = 0; i < currentAmount; i++) {
            roman += 'I';
        }
    }

    return roman;
}
convertToRoman(36);
convertToRoman(891);
convertToRoman(2014);
convertToRoman(3999);