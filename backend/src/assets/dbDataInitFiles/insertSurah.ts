import { createTable, insertSurah } from '../../services/queries';
const fs = require('fs');
import { pool } from '../../db';

export async function createTableFunc() {
    for (let i = 1; i <= 114; i++) {
        const query = createTable(`surah_${i}`);
        pool.query(query)
    }
}

export async function insertSurahFunc() {
    for (let i = 1; i <= 114; i++) {
        const data = fs.readFileSync(__dirname + `/russian-translated-kuliev/surah-${i}.txt`, { encoding: 'utf8' }, (err: Error) => {
            if (err) console.log(err);
        });
        const splittedData = data.split('\n');
        splittedData.forEach(async (line: string) => {
            const splittedLine = line.split('---');
            try {
                const insertQuery = insertSurah(`surah_${i}`);
                const insertedSurah = await pool.query(insertQuery,
                    [parseInt(splittedLine[0]), '', splittedLine[1], '']
                );
                console.log(insertedSurah);
            } catch (err) {
                console.log(err);
            }
        });
    }
}