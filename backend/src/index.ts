require('dotenv').config();
const express = require("express");
const cors = require("cors");


const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/surah', require('./routes/surah'));

const PORT = 5001;




app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})