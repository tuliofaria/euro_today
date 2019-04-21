const express = require('express')
const app = express()
const path =require('path')
const convert = require('./lib/convert')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/quotation', (req, res) => {
    const {quotation, amount} = req.query

    if(quotation && amount){
        const conversion = convert.convertFunc(quotation, amount)
        res.render('quotation', {
            err: false,
            quotation: convert.toMoney(quotation),
            amount: convert.toMoney(amount),
            conversion: convert.toMoney(conversion)
        })
    }else{
        res.render('quotation', {
            err: 'Invalid values.'
        })
    }
})










app.listen(3000, err => {
    if(err){
        console.log('Não foi possível iniciar o servidor :(')
    }else{
        console.log('Server online! :D')
    }
})