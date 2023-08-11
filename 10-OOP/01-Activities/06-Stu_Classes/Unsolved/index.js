// TODO: Create a class constructor named BlogPost that takes in 'authorName', 'title', 'text', and 'createdOn'.
class BlogPost {
    constructor(authorName, title, text, comments, createdOne) {
        this.authorName = authorName;
        this.title = title;
        this.text = text;
        // TODO: Give BlogPost a property called 'comments' that is set to an empty array.
        this.comments = []
        this.createdOne = createdOne;
    }
    
    // TODO: Give BlogPost a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn)'.
    printMetaData() {
        console.log(`created by ${this.authorName} on ${this.createdOne}`)
    }
    
    // TODO: Give Blog Post a method called addComment() that takes in a comment and adds it to the comments array.
    addComment(comment) {
        this.comments.push(comment);
    }
}

// TODO: Create a class constructor called Comment that takes in 'authorName', 'text', 'createdOn', and 'reaction'.
class Comment {
    constructor(authorName, text, createdOne, reaction) {
        this.authorName = authorName;
        this.text = text;
        this.createdOne = createdOne;
        this.reaction = reaction;
    }

    // TODO: Give Comment a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn) (reaction)'.
    printMetaData() {
        console.log(`created by ${this.authorName} on ${this.createdOne} ${this.reaction}`)
    }
}

// TODO: Create a new object using the Comment class constructor.
const newComment = new Comment('epic', 'text', 'and date', 'here');

// TODO: Create a new object using the BlogPost class constructor.
const newBlog = new BlogPost('another', 'epic', 'epic comment','and date lol')

newBlog.addComment(newComment);
newBlog.printMetaData();
console.log(newbl.comments);





// TODO: Use the addComment() method on your newly created BlogPost to add your newly created Comment to its comments array.

// TODO: Print the meta data for both the BlogPost and the Comment to the console.
