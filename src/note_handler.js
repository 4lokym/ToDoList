import * as ext from "./barrel.js";

export const createNoteList = (title, list = {}) => ext.baseList(title, "noteList", list);

export const createNoteElement = function(title, text = ""){;
    const parentObj = ext.baseElement(title, "noteElement");
    
    parentObj.toString = function(){
        return `${parentObj.title} is a ${parentObj.type}\nId: ${parentObj.getId()}\nTextContent: ${text}`;
    }
    
    return Object.assign(parentObj, {text});
}