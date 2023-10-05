const { describe } = require("node:test");

// TODO: Refactor the class to a factory function.
// class Lesson {
//   constructor() {
//     this.title = 'Module 17 - Computer Science';
//     this.description = 'CS for JS';
//   }
//   information() {
//     console.log(this.title, this.description);
//   }
// }

const information = (lessons) => ({
  getInfo: () =>
    console.log(`${lessons.title} - ${lessons.description}`),
});

const Lesson = (title, description) => {
  const lessons = {
    title,
    description,
  }

  return {
    ...information(lessons)
  };
};

const csForJS = Lesson('Module 17 - Computer Science', 'CS for JS');
csForJS.getInfo();
