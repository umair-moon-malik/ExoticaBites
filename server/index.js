const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors())



const main = () => {
    app.listen(7000 , () => {
        console.log("listening");
        
    })
}

main();