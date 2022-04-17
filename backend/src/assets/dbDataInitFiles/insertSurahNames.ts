const fs = require('fs');
const insertSurahNamePool = require('../../db');

function saveSurahNames() {
    fs.readFile(__dirname + '/surah-names.txt', 'utf8', (err: any, data: any) => {
        if (err) {
            console.log(err);
            return;
        }
        const lines = data.split('\n');

        lines.forEach(async (line: any) => {
            const splittedData = line.split('---');
            try {
                const insertSurah = await insertSurahNamePool.query(
                    "INSERT INTO surah_names_test (surah_num, surah_arab, surah_rus, surah_dungan) VALUES ($1, $2, $3, $4) RETURNING *",
                    [parseInt(splittedData[0]), '', splittedData[1], '']
                );
                console.log(insertSurah);
            } catch (err) {
                console.log(err);
            }
        });
    });
}

module.exports = saveSurahNames;