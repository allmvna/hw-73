const express = require('express');
const { Cipher, Decipher } = require('caesar-salad').Vigenere;
const app = express();
const port = 8000;

const incognito = 'password';

app.get('/encode/:text', (req, res) => {
    const text = req.params.text;
    const encoded = Cipher(incognito).crypt(text);
    return res.send(`${encoded}`);
});

app.get('/decode/:text', (req, res) => {
    const text = req.params.text;
    const decoded = Decipher(incognito).crypt(text);
    return res.send(`${decoded}`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});