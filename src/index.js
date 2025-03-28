import "./style.css";
 
const createListTool = function (type){
    return function (name){
        return {toString: `"${name}" is a ${type}`, name: name, type: type};
    };
};

const createToDoList = createListTool(type = "toDoList");
const createNoteList = createListTool(type = "noteList");
const createCheckList = createListTool(type = "chekList");





