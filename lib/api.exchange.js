const axios = require('axios')

const url = 'https://api.exchangeratesapi.io/latest'

const getCotacaoAPI = (data) => axios.get(url)
const extractCotacao = res => res.data.rates.USD
const getCotacao = async() => {
    const res = await getCotacaoAPI('')
    const cotacao = extractCotacao(res)
    return cotacao
}

module.exports = {
    getCotacao,
    extractCotacao,
    getCotacaoAPI
}