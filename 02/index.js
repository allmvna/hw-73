const express = require('express');
const app = express();
const port = 8000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});