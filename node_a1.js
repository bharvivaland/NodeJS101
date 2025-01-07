//1st sync
// const fs = require('fs');
// const folderPath = 'space_project';
// fs.mkdirSync(folderPath);

//async
// const fs = require('fs');
// const folderPath = 'space_project';

// fs.mkdir(folderPath, (err) => {
//     if (err) throw err;
// });


//2nd sync
//const fs = require('fs');
//const filePath = 'space_project/log.txt';
//fs.writeFileSync(filePath, "ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft.");

//async
// const fs = require('fs');
// const filePath = 'space_project/log.txt';
// fs.writeFile(filePath, "ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft.", (err) => {
//     if (err) throw err;
// });

//3rd sync
//fs.writeFileSync(filePath, "ISRO has started working on Gaganyaan.");

//async
// fs.writeFile(filePath, "ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft.", (err) => {
//     if (err) throw err;
// });  //Asyncronous


//4th sync
//fs.appendFileSync(filePath, " The current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission.");

//4th async
// fs.appendFile(filePath, " The current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission.", (err) => {
//     if (err) throw err;
// });

//5th sync
//const newFilePath = 'space_project/update.txt';
//fs.renameSync(filePath, newFilePath);

//async
// const newFilePath = 'space_project/update.txt';

// fs.rename(filePath, newFilePath, (err) => {
//     if (err) throw err;
// });

//6th sync
// const data = fs.readFileSync(newFilePath, 'utf8');
// console.log(data);
// console.log("We are excited");

//async
// fs.readFile(newFilePath, 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//     console.log("We are excited");
// });

//7th sync
// fs.unlinkSync(newFilePath);

//async
// fs.unlink(newFilePath, (err) => {
//     if (err) throw err;
// });

//8th sync
//fs.rmdirSync(folderPath);

//async
// fs.rmdir(folderPath, (err) => {
//     if (err) throw err;
//     console.log("Folder removed")
// });






