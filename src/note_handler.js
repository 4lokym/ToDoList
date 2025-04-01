import * as ext from "./barrel.js";

export const createNoteList = (title, list = {}) => ext.baseList(title, "noteList", list);

export const createNoteElement = function(title, text = ""){;
    const myobj = {text};
    Object.assign(myobj, ext.baseElement(title, "noteElement"));
    myobj.toString = function(){
        return `${myobj.title} is a ${myobj.type}\nId: ${myobj.getId()}\nTextContent: ${text}`;
    }
    
    return myobj;
}