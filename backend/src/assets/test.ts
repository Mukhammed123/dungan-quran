const fs = require('fs');

fs.readFile('surah-names.txt', 'utf8', (err: any, data: any) => {
    if (err) {
        console.log(err);
        return;
    }
    const lines = data.split('\n');

    lines.forEach(async (line: any) => {
        const splittedData = line.split('---');
        console.log(splittedData);
        // try {
        //     // const insertSurah = await pool1.query(
        //     //     "INSERT INTO surah_names (surah_num, surah_rus) VALUES ($1, $2) RETURNING *",
        //     //     [parseInt(splittedData[0], splittedData[1])]
        //     // );
        //     const insertSurah = await pool1.query(
        //         "SELECT * FROM surah_names;"
        //     )
        //     console.log(insertSurah);
        // } catch (err) {
        //     console.log(err);
        // }
    });
});