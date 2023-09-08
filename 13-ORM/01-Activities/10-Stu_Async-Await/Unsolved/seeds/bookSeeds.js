const sequelize = require('../config/connection');

const Book = require('../models/Book');
const Library = require('../models/Library');

const bookSeedData = require('./bookSeedData.json');
const librarySeedData = require('./librarySeedData.json');

// const seedDatabase = () => {
//   return sequelize.sync({ 
//     force: true 
//   })
//   .then(() => {
//     Book.bulkCreate(bookSeedData)
//     .then(() => {
//       Library.bulkCreate(librarySeedData)
//       .then(() => {
//         console.log('All Seeds Planted'); 
//       });
//     });
//   });

//   process.exit(0);
// };

// TODO Use async / await to Refactor the seedDatabase function below
const seedDatabase = async () => {
  await sequelize.sync({force: true})
  await Book.bulkCreate(bookSeedData)
  await Library.bulkCreate(librarySeedData)


  process.exit(0);
};

seedDatabase();
