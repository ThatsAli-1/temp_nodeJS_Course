const express = require('express');
const { products } = require('./data.js')
const app = express(); 

app.get('/', (req, res) => {
    res.send('<h1> Home Page </h1> <a href="/api/products"> Products </a> ')
})

app.get('/api/products/:productID', (req, res) => {
    // console.log(req.params);
    const { productID } = req.params;
    const singleProduct = products.find((product) => product.id === Number(productID))

    if (!singleProduct){
        return res.status(404).send('Product doesn\'t exist. ')
    }
    res.json(singleProduct);
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    res.send("Hello fucking world");
})


app.get('/api/v1/query', (req, res) => {
    console.log(req.query);
    const {search, limit} = req.query
    let sortedProducts = [...products];

    if(search){
        sortedProducts = sortedProducts.filter((product) => product.name.startsWith(search))
    }

    if(limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit) )
    }
    if(!sortedProducts.length){
        return res.status(200).json({success:true, data:[]})
    }
    res.status(200).json(sortedProducts)
})


app.listen(5000, () => {
    console.log('Listening on port 5000');
})