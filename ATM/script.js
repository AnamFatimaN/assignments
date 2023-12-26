var balance = 500000;
var userInput =prompt('please enter your amount');
var fiveThousand = Math.floor(userInput/5000)
var rem = userInput%5000;
var thousand = Math.floor(rem/1000);
var rem1 = rem% 1000;
var fivehundred = Math.floor(rem1 / 500);
// alert(`you will get ${fiveThousand} notes of 5000,${thousand} notes of thousand and ${fivehundred} notes of 500.`)
if (userInput > balance) {
    alert("please enter a smaller amount");
    }
    else if (userInput%5 != 0) {
        alert("please enter an amount multiple of 500" )
    } else {
        alert(`you will get ${fiveThousand} notes of 5000,${thousand} notes of thousand and ${fivehundred} notes of 500.`)
    }