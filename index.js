const express = require('express')

const app = express()

app.use(() => {
    console.log('halo server ...');
    console.log('halo server lagi ...');
    console.log('halo server ketiga ...');
})

app.listen(3001)