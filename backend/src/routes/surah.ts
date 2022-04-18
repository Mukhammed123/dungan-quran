const routeExpress = require("express");
const path = require('path');
const queries = require('../services/queries');
import { pool } from '../db';

const router = routeExpress.Router();

router.get('/names', async (req: any, res: any) => {
    let data;
    try {
        data = await pool.query(queries.surahNames);
        res.json(data.rows);
    } catch (err) {
        console.log(err);
        res.json({ msg: "Could not get surah names..." });
    }
});

router.get('/:id', async (req: any, res: any) => {
    const selectQuery = queries.selectSurah(`surah_${req.params.id}`);
    try {
        const data = await pool.query(selectQuery);
        res.json(data.rows);
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;
