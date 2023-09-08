const Reader = require('./Reader');
const LibraryCard = require('./LibraryCard');

Reader.hasOne(LibraryCard, {
  foreignKey: 'reader_id',
  // TODO: Add a comment describing the functionality of this property
  // when we delete the reader, delete the connected reader_id (the libraryCard)
  onDelete: 'CASCADE',
});

// linking library card model to the reader model.
LibraryCard.belongsTo(Reader, {
  foreignKey: 'reader_id',
});

// TODO: Add a comment describing the functionality of this statement
// export the two models together with the proper names.
module.exports = { Reader, LibraryCard };
