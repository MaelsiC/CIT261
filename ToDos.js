// let liveToDos = null;
let liveToDos = [
    {todo: 'Do Stuff'}
];
function readFromLS(key) {
    //to read from Local Storage. Local Storage(LS) object
    return JSON.parse(localStorage.getItem(key));
}
function writeToLS(key) {
    localStorage.setItem(key, JSON.stringify(liveToDos));
}
// writeToLS('todo');
// console.log(readFromLS('todo'));

function saveToDo(task, key) {
    const todo = {
        id: new Date(),
        task: task,
        completed: false
    };
    liveToDos.push(todo);
    writeToLS(key);
}

// export const url = "http://byui.edu";

function bindTouch(elementSelector, callback) {
    const element = qs(elementSelector);
    element.addEventListener('touchend', event => {
        event.preventDefault();
        callback();
    });
    element.addEventListener('click', callback);
    
}

export function getToDos() {
    return liveToDos;
}

export function qs(className) {
    return document.querySelector(className);
}

//No function, type, or return.
class ToDos {
    constructor(listElement, key) {
        this.listElement = listElement;
        this.key = key;
        bindTouch('#addButton', this.addToDo.bind(this));
    }
    addToDo() {
        const input = qs('#taskInput');
        saveToDo(input.value, this.key);
        this.listToDos();
        //input has a value property not innerHTML property.
    }
    listToDos() {
        console.log('worked!');
    }
}
export default ToDos;