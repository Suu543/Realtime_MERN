const express = require('express');
require('dotenv').config();

// Invoke Express
const app = express();

// Rest Endpoint
app.get('/rest', (req, res) => {
    return res.json({
        data: 'You hit rest endpoint...'
    });
});

// PORT
app.listen(process.env.PORT, () => {
    console.log(`Listening on PORT http://localhost:${process.env.PORT}`);
});