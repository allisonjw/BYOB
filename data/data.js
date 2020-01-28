const csv = require('csvtojson');
const bandsDataCSV = 'bands.csv';
const boysDataCSV = 'boys.csv';
const episodeDataCSV = 'episode.csv';
const scriptsDataCSV = 'scripts.csv'; 
const fs = require('fs');

// const cleanSets = sets => {
//     sets = JSON.parse(sets)
//     return sets.map((set) => {
//       set.set_num = set.set_num.replace(/-/gi, '');
//       return JSON.stringify(set)
//     })
//   }
  
  // setsData
//   csv()
//     .fromFile(setsDataCSV)
//     .then((jsonObj) => {
//       console.log(jsonObj)
//       return JSON.stringify(jsonObj)
//     })
//     .then((jsonArr) => {
//       return cleanSets(jsonArr)
//     })
//     .then((jsonCleanArr) => {
//       fs.writeFile('setsData.json', jsonCleanArr, (err) => {
//         if (err) throw err;
//         console.log('Data is now written to the file')
//       })
//     })
  
  // themesData
  csv()
    .fromFile(bandsDataCSV)
    .then((jsonObj) => {
      console.log(jsonObj)
      return JSON.stringify(jsonObj)
    })
    .then((jsonArr) => {
      fs.writeFile('bandsData.json', jsonAdrr, (err) => {
        if (err) throw err;
        console.log('Data is now written to the file')
      })
    })