//  Коран Перевод смысловКулиев Э.Р.

const fs = require('fs');

// for (let i = 1; i <= 114; i++) {
// console.log(i)
let data;
try {
    data = fs.readFileSync(`./dbDataInitFiles/quran_rus_original.txt`, 'utf8');
} catch (err) {
    console.log(err);
};

const splittedData = data.split('\n\n');
splittedData.forEach((element, index) => {
    const lines = element.split('\n');
    let fileContent = '';
    for (let i = 2; i < lines.length; i++) {
        let num = '';
        for (let wordIndex = 0; wordIndex < lines[i].length; wordIndex++) {
            if (isNaN(parseInt(lines[i][wordIndex]))) break;
            num += lines[i][wordIndex];
        }

        const splittedLine = lines[i].split(num + '. ')[1];
        // console.log(splittedLine);
        fileContent += num;
        fileContent += '---';
        fileContent += splittedLine;
        if (i < lines.length - 1)
            fileContent += '\n';
    }
    fs.writeFile(`./dbDataInitFiles/russian-translated-kuliev/surah-${index + 1}.txt`, fileContent, (err) => {
        if (err) console.log(err);
    });
});

