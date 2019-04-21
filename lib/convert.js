const convertFunc = (quotation, amount) => quotation * amount
const toMoney = value => parseFloat(value).toFixed(2)


module.exports = {
    convertFunc,
    toMoney
}