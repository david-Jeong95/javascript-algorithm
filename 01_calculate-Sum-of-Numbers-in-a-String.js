function sumStr(str) {
    let strArr = str.split(",");
    let sum = strArr.reduce((total, num) => {
        return parseFloat(total) + parseFloat(num);
    });

    return sum;
}