
-- inserts the the name of biographies (in values) into the table biographies
INSERT INTO biographies (id, name)
-- values to be inserted with id # and name of biography
VALUES
    ( 001, "Diary of Anne Frank"),
    ( 002, "Frida: A Biography of Frida Kahlo"),
    ( 003, "Long Walk to Freedom");

-- selects all the values inside the table biographies
SELECT * FROM biographies;
-- * means all 