let liveToDos = null;

// export const url = "http://byui.edu";

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
    }
    addToDo() {

    }
    listToDos() {

    }
}
export default ToDos;