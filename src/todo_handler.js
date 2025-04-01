import * as ext from "./barrel.js";


export const createCheckList = (title, list = {}) => ext.baseList(title, "checkList", list);
export const createTodoList = (title, list = {}) => ext.baseList(title, "todoList", list);


export const createCheckElement = function(title, description = ""){;
    const myobj = {description};

    Object.assign(myobj, ext.baseElement(title, "checkElement"))

    myobj.toString = function(){
        return `${myobj.title} is a ${myobj.type}\nId: ${myobj.getId()}\nDescription: ${myobj.description}`
    }
    
    return myobj;
}

export const createTodoElement = function(title, description = "", dueDate = null, priority = "low"){;
    const myobj = {dueDate, priority};
    Object.assign(myobj, createCheckElement(title, description));
    myobj.type = "todoElement";
    myobj.toString = function(){
           return `${myobj.title} is a ${myobj.type}\nId: ${myobj.getId()}\nDueDate: ${myobj.dueDate}\nPriority: ${myobj.priority}\nDescription: ${myobj.description}`
        }

    return myobj;
}
