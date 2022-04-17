const routeExpress = require("express");
const path = require('path');
const queries = require('../services/queries');
const surahPool = require('../db.ts');

const router = routeExpress.Router();

router.get('/names', async (req: any, res: any) => {
    let data;
    try {
        data = await surahPool.query(queries.surahNames);
        res.json(data.rows);
    } catch (err) {
        console.log(err);
        res.json({ msg: "Could not get surah names..." });
    }

});

router

module.exports = router;
