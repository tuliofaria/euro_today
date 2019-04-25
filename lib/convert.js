const convertFunc = (quotation, amount) => amount / quotation
const toMoney = value => parseFloat(value).toFixed(2)


module.exports = {
    convertFunc,
    toMoney
}