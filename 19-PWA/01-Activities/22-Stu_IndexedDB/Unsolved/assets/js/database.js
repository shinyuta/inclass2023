import { openDB } from 'idb';

const initdb = async () =>

// TODO: Add a comment explaining what this method does
// creates a database named todos using version 1 of the database

  openDB('todos', 1, {
    // TODO: Add a comment explaining the functionality of this method:
    // add our databse schema if it has not already been intialized.
    upgrade(db) {
      if (db.objectStoreNames.contains('todos')) {
        console.log('todos database already exists');
        return;
      }
      // TODO: Add a comment explaining what we're doing with the object store:
      // create a new object store for the data and givit it a key name of 'id' which needs to aut-increment.
      db.createObjectStore('todos', { keyPath: 'id', autoIncrement: true });
      console.log('todos database created');
    },
  });

initdb();
