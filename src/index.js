import "./style.css";
 
const baseElement = function(title, type = ""){
    const id = crypto.randomUUID();
    function toString(){
        return `${this.title} is a ${this.type}\nId: ${id}`
    }

    return {title, id, type, toString};
}

const baseList = function(title, type, list){
    const myobj = baseElement(title, type);
    if(typeof list !== typeof {}){
        throw new Error("baselist() takes only objects as an argument");
    }
    myobj.list = list;
    myobj.toString = () => `${myobj.title} is a ${myobj.type}\nId: ${myobj.id}\nContains: ${Object.entries(myobj.list).length} elements`;
    return myobj;
};

const createtoDoList = (title, list = {}) => baseList(title, "todoList", list);
const createNoteList = (title, list = {}) => baseList(title, "noteList", list);
const createCheckList = (title, list = {}) => baseList(title, "checkList", list);

console.log(createCheckList("mycheckList").toString());



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
