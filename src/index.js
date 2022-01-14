module.exports = reverse = (n) => {
    const str = Math.abs(n).toString();
    const strReverse = str.split("").reverse().join("");
    return strReverse;
};
