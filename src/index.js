import "./style.css";
 
const createListTool = function (type){
    return function (name){
        return {toString: `"${name}" is a ${type}`, name: name, type: type, elements_array: []};
    };
};

const createToDoList = createListTool("toDoList");
const createNoteList = createListTool("noteList");
const createCheckList = createListTool("chekList");

const baseElement = function(title, type){
    function toString(){
        return `${this.title} is a ${this.type}`
    }

    return {title, id: crypto.randomUUID(), type, toString};
}

const createCheckElement = function(title, description = ""){;
    const myobj = {description};

    Object.assign(myobj, baseElement(title, "checkElement"))

    myobj.toString = function(){
        return `"${myobj.title}" is a ${myobj.type}\nId: ${myobj.id}\nDescription: ${myobj.description}`
    }
    
    return myobj;
}

const createTodoElement = function(title, description = "", dueDate = null, priority = "low"){;
    const myobj = {dueDate, priority};
    Object.assign(myobj, createCheckElement(title, description));
    myobj.type = "todoElement";
    myobj.toString = function(){
           return `"${myobj.title}" is a ${myobj.type}\nId: ${myobj.id}\nDueDate: ${myobj.dueDate}\nPriority: ${myobj.priority}\nDescription: ${myobj.description}`
        }

    return myobj;
}

const createNoteElement = function(title, text = ""){;
    const myobj = {text};
    Object.assign(myobj, baseElement(title, "noteElement"));
    myobj.toString = function(){
        return `"${myobj.title}" is a ${myobj.type}\nId: ${myobj.id}\nTextContent: ${text}`;
    }
    
    return myobj;
}



console.log(createNoteElement("myNoteElement").toString());
console.log(createCheckElement("myCheckElement").toString());
console.log(createTodoElement("myTOdolement").toString());