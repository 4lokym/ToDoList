import * as ext from "./barrel.js";


export const createCheckList = (title, list = {}) => ext.baseList(title, "checkList", list);
export const createTodoList = (title, list = {}) => ext.baseList(title, "todoList", list);


export const createCheckElement = function(title, description = ""){;
    const parentObj = ext.baseElement(title, "checkElement");

    parentObj.toString = function(){
        return `${parentObj.title} is a ${parentObj.type}\nId: ${parentObj.getId()}\nDescription: ${description}`
    }
    const changeDescription = function(new_description){
        description = new_description;
    }
    
    return Object.assign(parentObj, {description, changeDescription});

}

export const createTodoElement = function(title, description = "", dueDate = null, priority = "low"){;
    const parentObj = createCheckElement(title, description);
    const done = false;
    const type = "todoElement";

    const setDone = function(){
        done = true;
    }
    const setNotdone = function(){
        done = false;
    } 

    parentObj.toString = function(){
           return `${parentObj.title} is a ${parentObj.type}\nId: ${parentObj.getId()}\nDueDate: ${parentObj.dueDate}\nDone: ${done}\nPriority: ${parentObj.priority}\nDescription: ${parentObj.description}`
        }

    return Object.assign(parentObj, {dueDate, priority, type, setDone, setNotdone});
}
