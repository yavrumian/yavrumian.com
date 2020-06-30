require('dotenv').config()
const express = require('express'),
    app = express()

app.use(express.static('./public'))

app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);
})
