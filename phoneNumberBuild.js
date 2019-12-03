function createPhoneNumber(numbers){
    var phoneNumA, phoneNumbB, phoneNumbC = '';
    let i = 0; i < numbers.length; i++; {
    var phoneNumA = '(' + numbers.slice(0,3).join('') + ') ';
    }
    let n = 0; n < numbers.length; n++; {
    var phoneNumB = numbers.slice(3,6).join('');
    }
    let x = 0; x < numbers.length; x++; {
    var phoneNumC = numbers.slice(6,12).join('');
    }
    return phoneNumA + phoneNumB + '-' + phoneNumC;
}