let leftUpNum = 0, rightUpNum = 0, leftDownNum = 0, rightDownNum = 0;
let checkString, stringResult;
let leftUpNumInterval = setInterval( () => {
    document.getElementsByClassName('firstNum')[0].textContent = leftUpNum;
    document.getElementsByClassName('firstNum')[1].textContent = leftUpNum;
    leftUpNum+= 2;
    if( leftUpNum > 2006 ) {
        clearInterval(leftUpNumInterval);
        return;
    }
}, 0);
let rightUpNumInterval = setInterval( () => {
    checkString = rightUpNum.toString().split('');
    checkString.splice(3, 0, ' ');
    stringResult = checkString.join('');
    document.getElementsByClassName('secondNum')[0].textContent = stringResult;
    document.getElementsByClassName('secondNum')[1].textContent = stringResult;
    rightUpNum+= 150;
    if( rightUpNum > 150000 ) {
        clearInterval(rightUpNumInterval);
        return;
    }
}, 0);
let leftDownNumInterval = setInterval( () => {
    document.getElementsByClassName('thirdNum')[0].textContent = `${leftDownNum}%`;
    document.getElementsByClassName('thirdNum')[1].textContent = `${leftDownNum}%`;
    leftDownNum+= 1;
    if( leftDownNum > 72 ) {
        clearInterval(leftDownNumInterval);
        return;
    }
}, 50);
let rightDownNumInterval = setInterval( () => {
    document.getElementsByClassName('forthNum')[0].textContent = rightDownNum;
    document.getElementsByClassName('forthNum')[1].textContent = rightDownNum;
    rightDownNum+= 1;
    if( rightDownNum > 50 ) {
        clearInterval(rightDownNumInterval);
        return;
    }
}, 80);