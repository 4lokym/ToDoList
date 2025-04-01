import * as ext from "./barrel.js";


export const createCheckList = (title, list = {}) => ext.baseList(title, "checkList", list);
export const createTodoList = (title, list = {}) => ext.baseList(title, "todoList", list);


export const createCheckElement = function(title, description = ""){;
    const parentObj = ext.baseElement(title, "checkElement");

    parentObj.toString = function(){
        return `${parentObj.title} is a ${parentObj.type}\nId: ${parentObj.getId()}\nDescription: ${description}`
    }
    
    return Object.assign(parentObj, {description});

}

export const createTodoElement = function(title, description = "", dueDate = null, priority = "low"){;
    const parentObj = createCheckElement(title, description);
    const type = "todoElement";

    parentObj.toString = function(){
           return `${parentObj.title} is a ${parentObj.type}\nId: ${parentObj.getId()}\nDueDate: ${parentObj.dueDate}\nPriority: ${parentObj.priority}\nDescription: ${parentObj.description}`
        }

    return Object.assign(parentObj, {dueDate, priority, type});
}
