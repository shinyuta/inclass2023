const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7];

// TODO: Complete the linearSearch function below.
const linearSearch = (array, element) => {
    
    for (let i=0; i < array.length; i++) {
        if (array[i] === element) {
            return i;
        } 
    }

    return -1;
};

const linearSearchMultipleElements = (array, element) => {
    const elementIndex = []

    for (let i=0; i < array.length; i++) {
        if (array[i] === element) {
            elementIndex.push(i);
        }
    }

    if (elementIndex.length === 0) {
        return "not found";
    } else {
        return elementIndex;
    }
}

