//  Коран Перевод смысловКулиев Э.Р.

const fs = require('fs');
let fileContent = '';
let data;
try {
  data = fs.readFileSync('./russian-translated-kuliev/surah-names.txt', 'utf8');
} catch (err) {
  console.log(err);
};

const splittedData = data.split('\n');
splittedData.forEach((element, index) => {
  let num = '';
  for (let i = 0; i < element.length && !isNaN(parseInt(element[i])); i++) {
    num += element[i];
  }
  // console.log(num);
  const surahName = element.split(num + ' ')[1];
  const line = num + '---' + surahName + '\n';
  fileContent += line;
});

fs.writeFile('./russian-translated-kuliev/surah-names.txt', fileContent, (err) => {
  if (err) console.log(err);
})
