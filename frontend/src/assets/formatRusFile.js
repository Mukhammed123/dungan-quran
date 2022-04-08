//  КоранПеревод смысловКулиев Э.Р.

const fs = require('fs');

fs.readFile('./quran_rus_original.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  //   console.log(data);
  //   console.log('\n\n\n');
  const splittedData = data.split('\n\n\n');
  // let surahNames = '';

  // splittedData.forEach((surah) => {
  //   const lines = surah.split('\n');
  //   // const secondWord = lines[0].split(' ')[1];
  //   // console.log(lines[0]);
  //   const words = lines[0].split(' ');
  //   const secondWord = words[1];
  //   let realSecondWord = '';
  //   let num = '';
  //   for (let i = 0; i < secondWord.length; i++) {
  //     if (!isNaN(parseInt(secondWord[i]))) num += secondWord[i];
  //     else realSecondWord += secondWord[i];
  //   }
  //   let sentence = num + ' ' + realSecondWord;

  //   for (let i = 2; i < words.length; i++) sentence += ' ' + words[i];
  //   surahNames += sentence;
  //   surahNames += '\n';
  // });

  // console.log(surahNames);

  // fs.writeFile(
  //   './russian-translated-kuliev/surah-names.txt',
  //   surahNames,
  //   (err) => {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }
  //     //file written successfully
  //   }
  // );

  splittedData.forEach((surah, index) => {
    fs.writeFile(
      `./russian-translated-kuliev/surah-${index + 1}.txt`,
      surah,
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        //file written successfully
      }
    );
  });
});
